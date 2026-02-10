# 🔬 Deep Learning-Based Prediction of Lifespan Degradation in Iron Bridges Due to Iron Oxidation 🚀

Welcome to this groundbreaking research repository! 🌟 This study presents a deep learning–based framework for predicting lifespan degradation in iron bridges due to iron oxidation, where corrosion extent is treated as the primary indicator of structural deterioration. Rather than attempting direct lifespan regression, the proposed approach formulates corrosion assessment as a semantic segmentation problem to enable precise pixel-level quantification of rusted regions, which is essential for corrosion severity evaluation and subsequent degradation-based lifespan estimation. 🏗️💡

## 📁 Repository Contents

Here's a curated list of our research assets, uploaded with precise timestamps for reproducibility:

- 📊 **dataset.zip** (Uploaded: 08/15/2025) - Core dataset for corrosion analysis and modeling.
- 🏗️ **IronBridge_All_Files.zip** (Uploaded: 08/22/2025) - Comprehensive collection of iron bridge data and models.
- 📄 **Corrosion Severity Index (NCI) and Service Life Estimation.pdf** (Uploaded: 09/15/2025) - Detailed research paper on corrosion metrics and lifespan predictions.
- 📝 **How to create formula.docx** (Uploaded: 10/03/2025) - Guide to formulating corrosion prediction algorithms.
- 🤖 **why use U-Net++ (EfficientNet-B4).docx** (Uploaded: 11/09/2025) - In-depth explanation of our AI model choice and architecture.
- 🎯 **IronBridge_Trained_Files.zip** (Uploaded: 11/30/2025) - Pre-trained models and weights for immediate deployment.
- 📈 **prediction for iron bridge.ipynb** (Uploaded: 12/19/2025) - Jupyter notebook with live predictions and visualizations.

## 🔥 Key Highlights

- **Semantic Segmentation Approach**: Formulating corrosion as pixel-level segmentation for accurate quantification. 🎨🧠
- **U-Net++ with EfficientNet-B4**: Achieved IoU 0.72, Dice 0.77, and image-level accuracy 0.99. 📈
- **Normalized Corrosion Index (NCI)**: Integrates visual corrosion with environmental factors. 🌍
- **Lifespan Estimation**: Conservative service-life predictions using power-law degradation models. ⏳
- **Real-World Impact**: Supporting proactive maintenance and safer infrastructure. 🌉🔧

## 📖 Abstract

This study presents a deep learning–based framework for predicting lifespan degradation in iron bridges due to iron oxidation, where corrosion extent is treated as the primary indicator of structural deterioration. Rather than attempting direct lifespan regression, the proposed approach formulates corrosion assessment as a semantic segmentation problem to enable precise pixel-level quantification of rusted regions, which is essential for corrosion severity evaluation and subsequent degradation-based lifespan estimation. The framework emphasizes dense corrosion mapping instead of coarse detection, ensuring accurate representation of thin, irregular, and spatially fragmented oxidation patterns commonly observed on iron bridge components. The framework is evaluated on a curated dataset comprising 396 training images and 43 test images of annotated RGB bridge inspection data with pixel-level corrosion masks collected from real-world inspection scenarios. Three deep learning–based segmentation models were implemented and evaluated on the same corrosion image dataset: U-Net++ with an EfficientNet-B4 encoder, DeepLabV3+ with a ResNet-101 backbone, and YOLOv8 segmentation using the YOLOv8-m model. Among these, U-Net++ demonstrated the strongest segmentation performance, achieving a pixel-level Intersection over Union of 0.72, a Dice coefficient of 0.77, and an image-level accuracy of 0.99. These results indicate high spatial agreement with ground truth masks and confirm the model’s suitability for quantitative corrosion area estimation required for degradation modeling. DeepLabV3+ produced moderate segmentation results with a validation IoU of approximately 0.54 and served as a baseline semantic segmentation approach. However, its tendency to smooth fine corrosion boundaries led to under-segmentation of thin rust regions, limiting its effectiveness for accurate severity estimation. YOLOv8 segmentation achieved high image-level accuracy of approximately 0.98 but yielded a mask mean Average Precision of 0.44 at 0.5 and 0.21 across the 0.5–0.95 range, indicating inadequate performance for precise corrosion area measurement due to the limitations of instance-based polygon segmentation. Based on comparative evaluation, U-Net++ with an EfficientNet-B4 encoder was selected as the final model for corrosion-driven lifespan degradation prediction. DeepLabV3+ was considered acceptable but suboptimal, while YOLOv8 segmentation was deemed unsuitable for quantitative corrosion severity assessment and lifespan analysis. The proposed framework further introduces a corrosion severity formulation derived from pixel-level corrosion extent, inspired by established atmospheric corrosion models and prior corrosion engineering literature. This formulation combines image-derived corrosion measurements with environmental exposure factors to enable interpretable severity scaling and conservative service-life estimation grounded in well-known corrosion progression theory. The framework provides a robust image-based foundation for corrosion assessment in iron bridges and can be extended in future work to incorporate temporal degradation modeling and uncertainty-aware lifespan estimation.

## 🧮 Key Formulas

### Corrosion Surface Ratio (S)
S = (Number of corrosion pixels) / (Total number of pixels)

### Normalized Corrosion Index (NCI)
NCI = S(1 + a E_a + b E_w + c E_c)

Where:
- E_a: Atmospheric Pollution Severity Factor
- E_w: Wetness / Humidity Exposure Factor (Time-of-Wetness)
- E_c: Chloride (Salt) Exposure Factor

### Corrosion Progression Model
d(t) = A t^n

Where:
- d(t): Material loss at time t
- A: Corrosion rate constant
- n < 1: Exponent for decaying rate

### Corrosion Rate Calibration
A = d(t_0) / t_0^n

### Time to Reach Minimum Thickness
t_final = ((T_0 - T_min) / A)^(1/n)

### Remaining Service Life
Remaining Life = t_final - t_0

Where:
- T_0: Original thickness
- T_min: Minimum allowable thickness

## 🚀 Getting Started

1. **Clone the repo**: `git clone https://github.com/LUCIFER76980/Research.git`
2. **Explore the data**: Unzip the datasets and examine the research paper.
3. **Run predictions**: Open the Jupyter notebook and start analyzing bridge corrosion.
4. **Contribute**: Found improvements? Open an issue or submit a pull request! 💪

## 📞 Contact & Collaboration

Got questions or want to collaborate? Reach out! Let's build the future of smart infrastructure together. 🌟

*Watch this repo for updates!* 👀

---

*Made with ❤️ for safer bridges and smarter cities.*
