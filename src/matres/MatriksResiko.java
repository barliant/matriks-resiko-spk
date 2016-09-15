package matres;

/**
 * 
 * Decision Tree modul Matriks Resiko untuk IVE Project.
 * @author Anung Ariwibowo
 * @version 20140920
 */

import weka.core.Attribute;
import weka.core.Instances;
import weka.core.converters.ArffLoader;
import weka.core.converters.ArffSaver;
import weka.core.converters.CSVLoader;
import java.io.File;
import java.io.IOException;
import java.util.Random;
import weka.classifiers.bayes.NaiveBayes;               // Naive bayes
import weka.classifiers.trees.J48;                      // C4.5
//import weka.classifiers.trees.Id3;                      // ID3
//import weka.classifiers.trees.SimpleCart;               // CART
import weka.classifiers.Evaluation;
import weka.core.DenseInstance;
import weka.core.Instance;
import weka.core.FastVector;
import weka.core.Attribute;


public class MatriksResiko {
  public static void main (String[] args) throws Exception {
    String dataResiko = "data\\Risk.csv";
    String dataAksi = "data\\Action.csv";
    String dataCuaca = "data\\weather.nominal.arff";

    CSVLoader csvLoader = new CSVLoader();
    csvLoader.setSource(new File(dataResiko));

    Instances instanceResiko = csvLoader.getDataSet();
    instanceResiko.setClassIndex(instanceResiko.numAttributes() - 1);

    csvLoader.setSource(new File(dataAksi));

    Instances instanceAksi = csvLoader.getDataSet();
    instanceAksi.setClassIndex(instanceAksi.numAttributes() - 1);

    ArffLoader arffLoader = new ArffLoader();
    arffLoader.setFile(new File(dataCuaca));

    Instances instanceCuaca = arffLoader.getDataSet();
    instanceCuaca.setClassIndex(instanceCuaca.numAttributes() - 1);

    J48 treeResiko = new J48();
    J48 treeAksi = new J48();
    J48 treeCuaca = new J48();

    System.out.println("Building classifier(s)...");
    treeResiko.buildClassifier(instanceResiko);
    treeAksi.buildClassifier(instanceAksi);
    treeCuaca.buildClassifier(instanceCuaca);

    // Set up an instance to be classified based on built
    // classifier(s) above.
    System.out.println("Setting up an Instance...");
    FastVector fvOutlookValues = new FastVector(3);
    fvOutlookValues.addElement("sunny");
    fvOutlookValues.addElement("overcast");
    fvOutlookValues.addElement("rainy");
    FastVector fvTemperatureValues = new FastVector(3);
    fvTemperatureValues.addElement("hot");
    fvTemperatureValues.addElement("mild");
    fvTemperatureValues.addElement("cool");
    FastVector fvHumidityValues = new FastVector(2);
    fvHumidityValues.addElement("high");
    fvHumidityValues.addElement("normal");
    FastVector fvWindyValues = new FastVector(2);
    fvWindyValues.addElement("TRUE");
    fvWindyValues.addElement("FALSE");
    FastVector fvPlayValues = new FastVector(2);
    fvPlayValues.addElement("yes");
    fvPlayValues.addElement("no");

    Attribute attrOutlook = new Attribute("outlook", fvOutlookValues);
    Attribute attrTemperature = new Attribute("temperature", fvTemperatureValues);
    Attribute attrHumidity = new Attribute("humidity", fvHumidityValues);
    Attribute attrWindy = new Attribute("windy", fvWindyValues);
    Attribute attrPlay = new Attribute("play", fvPlayValues);

    FastVector fvInstanceValues = new FastVector(5);
    fvInstanceValues.addElement(attrOutlook);
    fvInstanceValues.addElement(attrTemperature);
    fvInstanceValues.addElement(attrHumidity);
    fvInstanceValues.addElement(attrWindy);
    fvInstanceValues.addElement(attrPlay);

    Instances dataset = new Instances("An-instance-to-classify", fvInstanceValues, 0);
    System.out.println("NumAttributes: " + dataset.numAttributes());
    double[] values = new double[dataset.numAttributes()];
    /*
    values[0] = dataset.attribute(0).indexOf("sunny");
     */

    Instance contohCuaca = new DenseInstance(5);
    contohCuaca.setValue((Attribute)fvInstanceValues.elementAt(0), "sunny");
    //contohCuaca.setValue((Attribute)fvInstanceValues.elementAt(1), "cool");
    contohCuaca.setMissing(4);
    contohCuaca.setValue((Attribute)fvInstanceValues.elementAt(2), "high");
    contohCuaca.setValue((Attribute)fvInstanceValues.elementAt(3), "TRUE");
    contohCuaca.setMissing(4);
    
    dataset.add(contohCuaca);
    int cIdx = dataset.numAttributes() - 1;
    System.out.println("Num Instances: " + dataset.numInstances());
    System.out.println("cIdx: " + cIdx);
    dataset.setClassIndex(cIdx);

    System.out.println("Instance cuaca: " + contohCuaca);
    int classIndex = (int) treeCuaca.classifyInstance(dataset.instance(0));
    System.out.println("Class Label: " + fvPlayValues.elementAt(classIndex));
    System.out.println("Kelas instance cuaca: " + treeCuaca.classifyInstance(dataset.instance(0)));

  }
}

/*

< 50 MILLION RUPIAH
50 - 500 MILLION RUPIAH
0,5 - 5 BILLION RUPIAH
5 -50 BILLION RUPIAH
> 50 BILLION RUPIAH

 import weka.core.converters.ConverterUtils.DataSource;
 ...
 DataSource source = new DataSource("/some/where/data.arff");
 Instances data = source.getDataSet();
 // setting class attribute if the data format does not provide this information
 // For example, the XRFF format saves the class attribute information as well
 if (data.classIndex() == -1)
   data.setClassIndex(data.numAttributes() - 1);
 import weka.classifiers.trees.J48;
 ...
 String[] options = new String[1];
 options[0] = "-U";            // unpruned tree
 J48 tree = new J48();         // new instance of tree
 tree.setOptions(options);     // set the options
 tree.buildClassifier(data);   // build classifier
 import java.io.BufferedReader;
 import java.io.BufferedWriter;
 import java.io.FileReader;
 import java.io.FileWriter;
 import weka.core.Instances;
 ...
 // load unlabeled data
 Instances unlabeled = new Instances(
                         new BufferedReader(
                           new FileReader("/some/where/unlabeled.arff")));
 
 // set class attribute
 unlabeled.setClassIndex(unlabeled.numAttributes() - 1);
 
 // create copy
 Instances labeled = new Instances(unlabeled);
 
 // label instances
 for (int i = 0; i < unlabeled.numInstances(); i++) {
   double clsLabel = tree.classifyInstance(unlabeled.instance(i));
   labeled.instance(i).setClassValue(clsLabel);
 }
 // save labeled data
 BufferedWriter writer = new BufferedWriter(
                           new FileWriter("/some/where/labeled.arff"));
 writer.write(labeled.toString());
 writer.newLine();
 writer.flush();
 writer.close();
System.out.println(clsLabel + " -> " + unlabeled.classAttribute().value((int) clsLabel));
 */

