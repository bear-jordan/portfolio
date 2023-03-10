---
title: volcanic seismicity
slug: projects/volcanic-seismicty
image: ../assets/img/ds-jaime-dantas--mXlubcOD58-unsplash.jpg
download: volcano-seismic.pdf
alt: image of the cotopaxi volcano
scheme: light
date created: 2022.004
project type: statistics
collaborators: example
duration: 4 months
my role: project lead
stack: html, css, d3, python
draft: false
---

## about the project

Of the thousands of volcanoes on Earth, only a handful are actively monitored. Manual data analysis using highly-trained researchers requires a large time investment and prevents more volcanoes from being monitored. This project has two goals. First---classify seismic events generated by the Cotopaxi volcano using machine learning (ML) models to streamline the data pipeline. Second---compare the performance of multiple classification models to identify the most appropriate model. Ultimately, this work reduces the workload on researchers and allows more volcanoes to be monitored.

|                    |                    |                |               |
| -----------------: | :----------------- | -------------: | :------------ |
| **date created:**  | april 2022         | **duration:**  | 4 months      |
| **project type:**  | statistics         | **my role:**   | project lead  |
| **collaborators:** | alex dreo          | **stack:**     | python        |
|                    | min gu kang        |                | html+css      |
|                    | david koch         |                | js+d3         |
|                    | juwanwen lu        |                |               |
|                    | jeanette schofield |                |               |

## challenges

#### unstructured data

The original dataset is a list of raw waveforms which is non-linear and non-stationary. To perform any analysis, these data must be transformed into a tabular form. Empirical Mode Decomposition was selected as the feature extraction technique. The key benefits here are that the data is denoised and reduced to its dominate signals. With the data now in a tabular form, common machine learning techniques that rely on linear algebra can be implemented.

#### data imbalance

The earthquake data is extremely imbalanced. The most frequent type of earthquake (long-period) accounts for ~88% of the signal, and other three signal types respectfully represented ~4% of the dataset. Without adjusting for this class imbalance, the models would overrepresent the majority case.

To address this issue, Synthetic Minority Oversampling was performed creating imputed data points by generating artificial observations within the feature-space of neighboring points within the same minority class. This method was preferred over similar techniques, such as downsampling, that left too few observations to train and compare model performance. 

Additionally, precision-recall (F1) scores are selected as the evaluation criteria over recall in order to preserve the importance of minority classes.


## solution

The random forest model performed best of the models with an average precision-recall of 0.95 and a minimum value of 0.82 for icequakes (the worst represented in the original dataset). With this performance, the implementation of this methodology on production data could significantly reduce the manpower required to monitor a single volcano.

![final performance of the models showing an average precision-recall score of 0.95](./volcano-seismic/pr-rf-smote.png)
