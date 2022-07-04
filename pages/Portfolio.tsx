import React from "react";

export default function Portfolio() {
  return (
    <div className="container my-16">
      <h4 className="text-center mb-4 heading">Portfolio</h4>
      <h1 className="text-center mb-5">Check Out Some of My Works</h1>
      <div className=" mb-5">
        <div className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-1/2 md:order-1">
            <a href="https://huggingface.co/spaces/AjulorC/question_answering_bot_deployed_with_Gradio" target="blank">
              <div className="portfolio portfolio1 shadow">
                <img src="images/nlp app.PNG" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 md:order-12 md:ml-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">NLP Question-Answering AI Web App</h4>
            <h5 className="mb-3">NATURAL LANGUAGE PROCESSING</h5>
            <p>
            I built and Deployed a Question-Answer NLP model as a Web app using Gradio GUI. 
            I made use of HuggingFace pre-trained model, Gradio GUI, Pandas, and hosted on HuggingFace spaces. {" "}
            <a href="https://huggingface.co/spaces/AjulorC/question_answering_bot_deployed_with_Gradio" target="/blank"> 
                <button className="btn2"> Link to App </button>
            </a>, {" "}
            <a href="https://github.com/christian-freshness/NLP-Web-App-deployment-using-Gradio" target="/blank"> 
                <button className="btn2"> Github Repository </button>
            </a>, {" "}
            <a href="https://medium.com/@christianajulor/how-to-build-and-deploy-a-question-answering-ai-web-app-5a3941347b19" target="/blank"> 
                <button className="btn2"> My article on medium </button>
            </a>.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-1/2 md:order-1">
            <a href="https://github.com/christian-freshness/Dog-Breed-identification/blob/main/Dog_vision.ipynb" target="blank">
              <div className="portfolio portfolio1 shadow">
                <img src="images/dog-vision2.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 md:order-12 md:ml-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Dog Breed Identification</h4>
            <h5 className="mb-3">DEEP LEARNING CLASSIFICATION USING TENSORFLOW</h5>
            <p>
              This is a project i did which was a competiton hosted by {" "}
              <a href="https://www.kaggle.com/c/dog-breed-identification" target="/blank"> 
                <button className="btn2"> KAGGLE.</button>
              </a>.
              it involves using deep learning model to predict and determine the Breed
              of a dog in a picture, i made use of tensorflow and Keras, numpy, pandas and other libraries.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/ML-projects/blob/main/HEART%20DISEASE%20CLASSIFICATION.ipynb" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/heart-diseasease-full-analysis-saved-with-code2.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Predicting Heart Disease using Machine Learning</h4>
            <h5 className="mb-3">MACHINE LEARNING CLASSIFICATION | SCIKIT LEARN</h5>
            <p>
              This is a personal project i did which entails the classification of heart Disease 
              (if a patient has heart disease or not). The project involves binary classification 
              (a sample can only be one of two things). Which involves using a number of different features 
              (pieces of information) about a person to predict whether they have heart disease or not.
              The data was gotten from  {" "}
              <a href="https://archive.ics.uci.edu/ml/datasets.php" target="/blank">
                <button className="btn2"> CLEVELAND DATABASE. </button>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/Predicting-Hospital-inpatient-Length-of-Stay" target="blank">
              <div className="portfolio portfolio3 shadow">
                <img src="images/Schizophrenia.jpg" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 wow fadeInUp md:ml-12"
            data-wow-duration="0.7"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Predicting Hospital Inpatient length of Stay</h4>
            <h5 className="mb-3">MACHINE LEARNING REGRESSION | SCIKIT LEARN</h5>
            <p>
              Using Machine Learning to Predict Hospital Length of stay(admission days) 
              for Patients with SCHIZOPHRENIA and other PSYCHOTIC DISORDERS. The ability to predict how long a patient will stay, 
              only with information available as soon as they enter the hospital and are diagnosed, can therefore have many positive effects for 
              a hospital and its efficiency. A model that can predict patient length of stay could allow hospitals to better analyze the factors 
              that influence length of stay the most.{" "}
              <a href="https://medium.com/@christianajulor/predicting-hospital-length-of-stay-for-inpatients-diagnosed-with-schizophrenia-and-other-psychotic-bf02c50db0c" target="/blank"> 
                <button className="btn2"> My article on medium </button>
            </a>.
              The data was gotten from {" "}
              <a href="https://health.data.ny.gov/dataset/Hospital-Inpatient-Discharges-SPARCS-De-Identified/22g3-z7e7" target="/blank">
                <button className="btn2"> NY Hospital Inpatient Discharges dataset. </button>
              </a> 
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/ZuChat" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/zuri chat.PNG" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">ZuChat App</h4>
            <h5 className="mb-3">BACKEND DEVELOPMENT | DJANGO</h5>
            <p>
            Zuchat is a real-time chat App built with Python and Django.
            You can chat with anybody in a room (like group) that is connected in the same chat room.
            Multiple rooms can also be created. {" "}
            <a href="https://myzuchatapp.herokuapp.com/" target="/blank"> 
                <button className="btn2"> Link to App </button>
            </a>
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/EDA-on-Reviews-Text-Data" target="blank">
              <div className="portfolio portfolio3 shadow">
                <img src="images/reviews text.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 wow fadeInUp md:ml-12"
            data-wow-duration="0.7"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">EDA on Reviews Text Data</h4>
            <h5 className="mb-3">EXPLORATORY DATA ANALYSIS | NATURAL LANGUAGE PROCESSING</h5>
            <p>
            This project entails the exploratory data analysis and natural language processing (NLP) 
            i carried out on women's e-commerce clothing reviews(text).
            Libraries used includes Numpy, Pandas, Matplotlib, Plotly and Seaborn.
            The data was gotten from {" "}
              <a href="https://www.kaggle.com/nicapotato/womens-ecommerce-clothing-reviews" target="/blank">
                <button className="btn2"> KAGGLE. </button>
              </a> 
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/NLP-question-Answering-Model" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/NLP1-1024x542.jpeg" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">NLP Question-Answering Model</h4>
            <h5 className="mb-3">NATURAL LANGUAGE PROCESSING | DEEP LEARNING</h5>
            <p>
              This is a personal project i did which entails
              extracting Text data from wikipedia about the past 46 Presidents of United States of America 
              and then building an NLP question-Answering 
              Model using the hugging-face API.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/bulldozer-price-prediction-competition/blob/main/AUCTION%20SALE%20PRICE%20PREDICTION%20OF%20BULLDOZERS.ipynb" target="blank">
              <div className="portfolio portfolio3 shadow">
                <img src="images/bulldozer2.jpeg" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 wow fadeInUp md:ml-12"
            data-wow-duration="0.7"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Blue Book for Bulldozers</h4>
            <h5 className="mb-3">MACHINE LEARNING REGRESSION | SCIKIT LEARN</h5>
            <p>
            This project entails predicting future auction sale price for a piece of heavy equipment 
            to create a "blue book" for bulldozers. The data and evaluation metrics used is 
            root mean squared log error (RMSLE), which was the instructions given on kaggle.
            The data was gotten from {" "}
              <a href="https://www.kaggle.com/c/bluebook-for-bulldozers/overview" target="/blank">
                <button className="btn2"> KAGGLE. </button>
              </a> 
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://christianajulor.pythonanywhere.com" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/E-commerce.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">E-Commerce Site</h4>
            <h5 className="mb-3">BACK-END DEVELOPMENT USING DJANGO</h5>
            <p>
              This is a personal project i created with django. I developed the backend using django. 
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/Predictive-modelling-on-Nigeria-Bank-Campaign-Subscriptions" target="blank">
              <div className="portfolio portfolio3 shadow">
                <img src="images/Nigeria bank.jpeg" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 wow fadeInUp md:ml-12"
            data-wow-duration="0.7"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Predictive Modelling on Nigerian Bank Campaign Subscriptions</h4>
            <h5 className="mb-3">MACHINE LEARNING CLASSIFICATION | SCIKIT LEARN</h5>
            <p>
            I found patterns and built a predictive model on this dataset with the aim
            of forecasting the percentage of potential customers for the financial 
            products of the bank. The evaluation metric used was 'Mean F1-Score'.
            The data was gotten from {" "}
              <a href="https://www.kaggle.com/c/data-science-nigeria-bank-campaign-subscriptions/data" target="/blank">
                <button className="btn2"> KAGGLE. </button>
              </a> 
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/EDA-on-boston-housing-dataset" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/boston pic.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">EDA on Boston Housing Dataset</h4>
            <h5 className="mb-3">EXPLORATORY DATA ANALYSIS</h5>
            <p>
              This project entails the exploratory data analysis i carried out on the boston housing dataset.
              Libraries used includes Numpy, Pandas, Matplotlib and Seaborn.   
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/EDA-on-Fifa-World-Cup-Matches" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/EDA ON FIFA.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">EDA on FIFA World Cup Matches</h4>
            <h5 className="mb-3">EXPLORATORY DATA ANALYSIS</h5>
            <p>
              This project entails the exploratory data analysis i carried out on FIFA World Cup Matches.
              Libraries used includes Numpy, Pandas, Matplotlib, Plotly and Seaborn.
              The data was gotten from {" "}
              <a href="https://www.kaggle.com/abecklas/fifa-world-cup" target="/blank">
                <button className="btn2"> KAGGLE. </button>
              </a>    
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/EDA-on-Titanic-dataset" target="blank">
              <div className="portfolio portfolio3 shadow">
                <img src="images/Titanic-pic.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 wow fadeInUp md:ml-12"
            data-wow-duration="0.7"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">EDA on The Titanic Dataset</h4>
            <h5 className="mb-3">EXPLORATORY DATA ANALYSIS</h5>
            <p>
            This project entails the exploratory data analysis
            i carried out on the titanic dataset.
            Libraries used includes Numpy, Pandas, Matplotlib, Plotly and Seaborn.
            The data was gotten from {" "}
              <a href="https://www.kaggle.com/c/titanic/data" target="/blank">
                <button className="btn2"> KAGGLE. </button>
              </a> 
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/Great-Motors-Car-Price-Prediction" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/car price.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Great Motors Car Price Prediction</h4>
            <h5 className="mb-3">MACHINE LEARNING REGRESSION | SCIKIT LEARN</h5>
            <p>
              A Nigerian automobile company, Great Motors. The objective of the challenge is to predict the 
              price (Amount (Million Naira)) the company should sell a car based on the available 
              data (Location, Maker, Model, Year, Color, Amount (Million Naira), Type, Distance). 
              The objective is to predict the selling price.  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
