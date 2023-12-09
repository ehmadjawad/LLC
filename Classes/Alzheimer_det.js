// import React, { useEffect, useState } from 'react';
// import { View, Button, Image, Text } from 'react-native';
// // import ImagePicker from 'react-native-image-picker';
// import { launchImageLibrary } from 'react-native-image-picker';
// import * as tf from '@tensorflow/tfjs'
// import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native'

// const Check = () => {
//   const [model1, setModel1] = useState(null);
//   const [maxPredictions, setMaxPredictions] = useState(0);
//   const [image, setImage] = useState(null);
//   const [predictions, setPredictions] = useState([]);
//   // Set up state for predictions

//   const modelJSON = require('../android/Alzhimer/model.json')
//   const modelWeights = require('../android/Alzhimer/weights.bin')
//   const modelLabels = require('../android/Alzhimer/metadata.json')
//   // useEffect(() => {
//   //   async function initModel() {
//   //     // Load model and metadata using tfjs-react-native


//   //     // const loadedModel = await tf.loadGraphModel(modelURL);
//   //     // loadModel()
//   //     // setModel(loadedModel);

//   //     // Set maxPredictions based on your model
//   //     // ...
//   //   }

//   //   initModel();
//   // }, []);

//   const loadModel = async () => {

//         const model = await tf.loadLayersModel(
//           bundleResourceIO(modelJSON, modelWeights)
//         ).catch((e) => {
//           console.log("[LOADING ERROR] info:", e)
//         })

//         setModel1(model);
//         console.log("doneee")
//         return model
//       }

//         const selectImage = () => {

//     // setFilePath(null);
//     var options = {
//       mediaType: 'photo',
//       quality: 0.7,
//       selectionLimit: 1,
//       includeExtra: true,
//       includeBase64:true
//     };
//     launchImageLibrary(options, res => {
//       if (res.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (res.error) {
//         console.log('ImagePicker Error: ', res.error);
//       } else if (res.customButton) {
//         console.log('User tapped custom button: ', res.customButton);
//       } else {
//         // console.log(res.assets[0].uri)
//         const source =  res.assets[0].uri;

//         setImage(source);
//         console.log(source,"!!1");
//       }
//     });

//   };

//   const predict = async () => {
//     await loadModel()
//     console.log("1")
//     // if (!model1) return;
//     console.log("2")

//     // Preprocess the image
//     const imageTensor = await tf.image.decodeImage(image);
//     const resizedTensor = await tf.image.resizeBilinear(imageTensor, [224, 224]);
//     const normalizedTensor = await resizedTensor.div(tf.scalar(255.0));

//     // Make prediction
//     const predictions = await model1.predict(normalizedTensor);

//     // Process and display predictions
//     // (This is a simple example, modify according to your model)
//     const top3 =  tf.topk(predictions, 3);
//     const labels = await top3.indices.data();
//     const probabilities = await top3.values.data();
//     setPredictions(labels.map((label, index) => ({
//       label: `${label}`,
//       probability: `${(probabilities[index] * 100).toFixed(2)}%`,
//     })));
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick Image" onPress={selectImage} />
//       {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
//       <Button title="Predict" onPress={predict} />
//       {/* {predictions.length > 0 && (
//         <View style={{ marginTop: 20 }}>
//           <Text style={{ fontSize: 18 }}>Predictions:</Text>
//           {predictions.map((prediction) => (
//             <Text key={prediction.label}>
//               {prediction.label}: {prediction.probability}
//             </Text>
//           ))}
//         </View>
//       )} */}
//     </View>
//   );
// };

// export default Check;




import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native'
// import * as lite from '@tensorflow/tfjs-tflite'



export default function Check({ navigation }) {


  const handleNavigation = screenname => {
    console.log(screenname);
    navigation.navigate(screenname);
  };

  const [filePath, setFilePath] = useState();
  const URL = "https://teachablemachine.withgoogle.com/models/tvTUjrX_i/"
  const modelJSON = require('../tm-my-image-model/model.json')
  const modelWeights = require('../tm-my-image-model/weights.bin')
  const modelLabels = require('../android/Alzhimer/metadata.json')
  //  const modelJSON = require('../Embedded Image/model.json')
  // const modelWeights = require('../Embedded Image/weights.bin')
  // const modelLabels = require('../Embedded Image/metadata.json')
  const modelJSONURL = 'model.json'
  const modelWeightsURL = 'weights.bin'
  const modelLabelsURL = 'metadata.json'

  const loadModel = async () => {
    // const modelURL = URL + "model.json";
    //     const metadataURL = URL + "metadata.json"

    const model = await tf.loadLayersModel(
      // modelURL, metadataURL

      bundleResourceIO(modelJSON, modelWeights)
    ).catch((e) => {
      console.log("[LOADING ERROR] info:", e)
    })
    console.log("doneee")
    return model
  }

  // loadModel()
  const transformImageToTensor = async (uri) => {
    





    // const img64 = uri.base64
    // console.log(img64,"IMG64")
    const reshapeImg = tf.reshape(uri, [1, 224, 224, 3]);
    const imgTensor = tf.image.resizeNearestNeighbor(reshapeImg, [224, 224]);

// Reshape the tensor to have a batch size of 1
const img = imgTensor.expandDims(0);

    // const imgBuffer = tf.util.encodeString(img64, 'base64').buffer
    // console.log(imgBuffer,"Imgbufff")
    // const raw = new Uint8Array(imgBuffer)
    // console.log(raw,"raw")
    // let imgTensor = decodeJpeg(raw)
    // const scalar = tf.scalar(255)
    // //resize the image
    // imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [224, 224])
    // //normalize; if a normalization layer is in the model, this step can be skipped
    // const tensorScaled = imgTensor.div(scalar)
    // //final shape of the rensor
    // const img = tf.reshape(imgTensor, [1, 224, 224, 3])
    return img
  }
  const makePredictions = async (batch, model, imagesTensor) => {
    // const predictions = await modelRef.current.classify(imgTensor);


    const predictionsdata = await model.predict(imagesTensor)
    console.log(predictionsdata, "PD")

    // const topPrediction = await predictionsdata.argMax(1).dataSync()[0];
    // console.log(topPrediction,"TOP")
    const splitPredictions = predictionsdata.split(batch);
    console.log(splitPredictions,"SP")
    const topPredictions = await Promise.all(
      splitPredictions.map(async (prediction) => {
        const topPredictionIndex = await prediction.argMax(1).dataSync()[0];
        const topProbability = await prediction.max(1).dataSync()[0];
        return { index: topPredictionIndex, probability: topProbability };
      })
    );
    console.log(topPredictions, "TOP PRED")
    return topPredictions;



    let pred = predictionsdata.split(batch) //split by batch size

    // console.log(pred,"pred")

    return pred
    // return predictedClassIndex
  }
  const getPredictions = async (image) => {
    await tf.ready()
    loadModel()
    const model = await loadModel()
    const tensor_image = await transformImageToTensor(image)

    const predictions = await makePredictions(1, model, image)

    return predictions
  }





  const selectImage = () => {

    setFilePath(null);
    var options = {
      mediaType: 'photo',
      quality: 0.7,
      selectionLimit: 1,
      includeExtra: true,
      includeBase64: true
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        setFilePath(res.assets[0])
        // console.log(res.assets[0].base64);
      }
    });

  };





  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '55%' }}>
        <View style={styles.InsertImageContainer}>
          <Image
            style={styles.uploadImage}
            resizeMode="contain"
            source={{
              uri: filePath
                ? filePath.uri
                : 'https://icon-library.com/images/file-upload-icon/file-upload-icon-22.jpg',
            }}
          />
          <TouchableOpacity
            style={styles.selectImage}
            onPress={() => selectImage()}>
            <Text isBold style={styles.label} isCenter>
              {filePath ? 'CHANGE' : 'CHOOSE'} IMAGE
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity
        // onPress={() => handleNavigation('Report')}
        onPress={() => getPredictions(filePath)}

        style={{
          backgroundColor: '#d34b4b',
          width: 90,
          padding: 10,
          borderRadius: 15,
          marginTop: 25,
          left: 280,
          borderColor: 'black',
        }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  selectImage: {
    width: '60%',
    backgroundColor: "gray",
    marginTop: 20,
    borderRadius: 20,
    alignSelf: 'center',
  },
  uploadImage: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 20,
    padding: 15,
    color: '#fff'
  },
  selectImage: {
    width: '80%',
    backgroundColor: "gray",
    marginTop: 20,
    borderRadius: 20,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },

  InsertImageContainer: {
    alignSelf: 'center',
    padding: 8,
    height: 300,
    width: 250,
    backgroundColor: '#d34b4b',
    marginTop: 40,
    position: 'relative',
    borderRadius: 8,

  },

  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    top: 30,
  },
  border: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    height: '100%',
    marginBottom: 2,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 60,
    width: 57,
    top: 40,
    right: 60,
  },
  mri: {
    color: '#825841',
    fontSize: 20,
    bottom: 15,
    fontFamily: 'Abel',
  },
  tube: {
    backgroundColor: '#717EF0',
    height: 11,
    width: 260,
    borderRadius: 7.5,
    bottom: 15,
  },
  percent: {
    bottom: 50,
    left: 220,
    fontSize: 17,
    color: '#AA9292',
    fontWeight: '50',
  },
  btns: {
    flexDirection: 'row',
    marginLeft: 200,
    marginTop: -20,
    left: 20,
    bottom: 15,
  },
  pre: {
    backgroundColor: '#60A15F',
    borderRadius: 5,
    marginRight: 2,
    padding: 5,
  },
  del: {
    backgroundColor: '#C80D0D',
    borderRadius: 5,
    padding: 5,
  },
  png: {
    alignSelf: 'center',
  },
  txt: {
    color: 'white',
  },
  img2: {
    height: 10,
    width: 15,
    top: 5,
  },
  date: {
    flexDirection: 'row',
    backgroundColor: '#d34b4b',
    height: 22,
    borderRadius: 3,
    padding: 3,
    top: 2,
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});
