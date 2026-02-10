const https = require('https');

const REPO_OWNER = 'LUCIFER76980';
const REPO_NAME = 'Research';
// Token can be passed as command line argument or environment variable
const TOKEN = process.argv[2] || process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.error('Error: GitHub token is required');
  console.log('Usage: node create-prs.js YOUR_GITHUB_TOKEN');
  console.log('   or: set GITHUB_TOKEN=your_token_here && node create-prs.js');
  process.exit(1);
}


const branches = [
  { head: 'feature/quickdraw-test', title: 'Quickdraw Achievement Test', body: 'Testing Quickdraw achievement - will close quickly' },
  { head: 'feature/yolo-test', title: 'YOLO Achievement Test', body: 'Testing YOLO achievement - merge without review' },
  { head: 'feature/pull-shark-1', title: 'Pull Shark Achievement - PR 1', body: 'First PR for Pull Shark achievement' },
  { head: 'feature/pull-shark-2', title: 'Pull Shark Achievement - PR 2', body: 'Second PR for Pull Shark achievement' },
  { head: 'feature/pair-extraordinaire', title: 'Pair Extraordinaire Achievement', body: 'PR with co-authored commit for Pair Extraordinaire achievement' }
];

function createPR(head, title, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      title: title,
      body: body,
      head: head,
      base: 'main'
    });

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${TOKEN}`,
        'User-Agent': 'Node.js Script',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        const result = JSON.parse(responseData);
        if (res.statusCode === 201) {
          console.log(`✅ Created PR #${result.number}: ${result.html_url}`);
          resolve(result);
        } else {
          console.error(`❌ Failed to create PR for ${head}:`, result.message);
          reject(result);
        }
      });
    });

    req.on('error', (error) => {
      console.error(`❌ Error creating PR for ${head}:`, error.message);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('Creating pull requests for GitHub achievements...\n');
  
  for (const branch of branches) {
    try {
      await createPR(branch.head, branch.title, branch.body);
    } catch (error) {
      console.error(`Skipping ${branch.head} due to error`);
    }
  }
  
  console.log('\n✨ Done! Check your repository at:');
  console.log(`https://github.com/${REPO_OWNER}/${REPO_NAME}/pulls`);
}

main();
