🧠 Deep Learning–Based Corrosion Severity and Service Life Prediction for Iron Bridges

🔬 Research Project | Structural Health Monitoring | Deep Learning | Computer Vision

This repository presents a research-driven framework for detecting corrosion in iron bridges and estimating their remaining service life using deep learning–based semantic segmentation combined with explicit mathematical corrosion models.

📌 The work was carried out over ~7 months of continuous research and experimentation, including model development, formulation design, validation, and documentation.

🕒 Research Timeline & Transparency

🧠 Research & experimentation: ~7 months

🔁 Model iteration & validation: Multiple cycles

📄 Formula derivation & documentation: Parallel to experiments

📦 Repository upload: Consolidated later due to academic and access constraints

⚠️ Important note:
Some datasets, trained models, and documents were uploaded together at a later stage. This does not indicate recent work — the GitHub commit history supports the actual research duration.

🎯 Research Objectives

🔍 Detect corrosion regions at pixel level

📐 Quantify corrosion severity numerically

🌦️ Incorporate environmental aggressiveness

⏳ Estimate remaining service life (RSL) of iron bridge components

📉 Provide interpretable and conservative predictions, not black-box outputs

🧱 Methodology Overview

1️⃣ Semantic segmentation of corrosion using deep learning
2️⃣ Extraction of corrosion surface ratio from masks
3️⃣ Integration of environmental severity factors
4️⃣ Computation of Normalized Corrosion Index (NCI)
5️⃣ Prediction of remaining service life using corrosion progression models

📌 Segmentation Model:
U-Net++ with EfficientNet-B4 backbone (architecture choice justified in documentation)

🧮 Corrosion Severity & Service Life Formulation

This research explicitly defines all formulas used. No heuristic guessing is involved.

🔹 1. Image-Based Corrosion Score (S)

From segmentation output:

𝑃
𝑐
P
c
	​

 = pixels classified as corrosion

𝑃
𝑡
P
t
	​

 = total structural pixels

𝑆
=
𝑃
𝑐
𝑃
𝑡
S=
P
t
	​

P
c
	​

	​


📌 Represents the fraction of corroded surface area (0–1).

🔹 2. Environmental Severity Factors

Corrosion severity depends strongly on environment. Three dimensionless factors are used:

(a) Pollution Factor 
𝐸
𝑎
E
a
	​


Represents SO₂ and industrial pollutants

Rural: 0.1–0.2

Urban: 0.5–0.7

Industrial: 0.8–1.0

(b) Wetness / Humidity Factor 
𝐸
𝑤
E
w
	​


Based on Time of Wetness (TOW)

< 200 h/year: 0.1–0.2

1500–3000 h/year: 0.5–0.6

5000 h/year: 1.0

(c) Chloride (Salt) Factor 
𝐸
𝑐
E
c
	​


Based on marine exposure

Inland: 0.0–0.2

1–10 km from sea: 0.6–0.8

< 1 km coastal: 0.9–1.0

📌 Values are derived from ISO 9223 / ISO 9224 classifications and environmental data.

🔹 3. Normalized Corrosion Index (NCI)

The Normalized Corrosion Index combines visual corrosion and environmental aggressiveness:

NCI
=
𝑆
×
(
1
+
𝑎
𝐸
𝑎
+
𝑏
𝐸
𝑤
+
𝑐
𝐸
𝑐
)
NCI=S×(1+aE
a
	​

+bE
w
	​

+cE
c
	​

)

Where:

𝑎
,
𝑏
,
𝑐
a,b,c are weighting coefficients

NCI increases only when both corrosion and harsh environment coexist

🔢 Example

If:

𝑆
=
0.5
S=0.5

𝐸
𝑎
=
0.8
,
  
𝐸
𝑤
=
0.7
,
  
𝐸
𝑐
=
1.0
E
a
	​

=0.8,E
w
	​

=0.7,E
c
	​

=1.0

𝑎
=
0.5
,
  
𝑏
=
0.3
,
  
𝑐
=
0.2
a=0.5,b=0.3,c=0.2

NCI
=
0.905
NCI=0.905
🔹 4. Corrosion Progression Model

Corrosion depth follows a power-law decay model:

𝑑
(
𝑡
)
=
𝑘
⋅
𝑡
𝑛
d(t)=k⋅t
n

Where:

𝑑
(
𝑡
)
d(t) = metal loss (mm)

𝑡
t = exposure time (years)

𝑘
k = corrosion rate constant

𝑛
n = decay exponent (typically 0.3–0.7)

📌 Models the decreasing corrosion rate over time due to protective rust layers.

🔹 5. Remaining Service Life (RSL)

Let:

𝑇
0
T
0
	​

 = original thickness

𝑇
𝑚
𝑖
𝑛
T
min
	​

 = minimum safe thickness

Critical loss:

𝑑
𝑐
𝑟
𝑖
𝑡
=
𝑇
0
−
𝑇
𝑚
𝑖
𝑛
d
crit
	​

=T
0
	​

−T
min
	​


Failure time:

𝑡
𝑓
=
(
𝑑
𝑐
𝑟
𝑖
𝑡
𝑘
)
1
/
𝑛
t
f
	​

=(
k
d
crit
	​

	​

)
1/n

Remaining service life:

RSL
=
𝑡
𝑓
−
𝑡
𝑐
𝑢
𝑟
𝑟
𝑒
𝑛
𝑡
RSL=t
f
	​

−t
current
	​

🔢 Example

𝑇
0
=
10
T
0
	​

=10 mm

Current thickness = 9 mm after 20 years

𝑇
𝑚
𝑖
𝑛
=
7
T
min
	​

=7 mm

𝑛
=
0.65
n=0.65

➡️ Total life ≈ 108 years
➡️ Remaining life ≈ 88 years

📂 Repository Contents
dataset.zip                         # Corrosion image dataset
IronBridge_Trained_Files.zip        # Saved trained models
IronBridge_All_Files.zip            # Complete experiment bundle

prediction for iron bridge.ipynb
Corrosion Severity Index (NCI) and Service Life Estimation.ipynb

why use U-Net++ (EfficientNet-B4).docx
How to create formula.docx


📌 Files are zipped due to size and academic data constraints.

🎥 Working Demonstration

🎬 A full working demo video is included / attached (recommended via GitHub Releases).

The demo shows:

Dataset usage

Model inference

Corrosion segmentation

Severity and service life estimation

📄 Documentation & Research Assets

📘 Mathematical derivation of formulas

📄 Justification of model architecture

🧮 Environmental factor calculation

🧠 Alignment with corrosion engineering standards

All logic is fully documented in the provided DOCX files and notebooks.

👤 Author

Hetkumar Patel
🎓 MS Computer Science
🧠 AI / ML | Research | Structural Analytics
📍 United States

⭐ Final Notes

This is a research repository, not a production system

Focus is on interpretability, correctness, and defensibility

The methodology bridges deep learning and civil engineering practice
