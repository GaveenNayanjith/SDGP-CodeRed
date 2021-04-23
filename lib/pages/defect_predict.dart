import 'package:flutter/material.dart';

class DefectPr extends StatefulWidget{
  @override
  _DefectPrState createState() => _DefectPrState();
}

class _DefectPrState extends State<DefectPr>{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.deepOrangeAccent,
          title: Text("Defect Prediction",style: Theme.of(context).textTheme.headline6,)
      ),
      backgroundColor: Colors.orangeAccent,
      body: Container(
        padding: EdgeInsets.all(30.0),
        child: Column(
          children: <Widget>[
            Text("Your Vehicle is: ",
                style: Theme.of(context).textTheme.headline5,
                textAlign: TextAlign.center),
            Text("BMW 318i", textAlign: TextAlign.center),
            Text("CBC - 1396", textAlign: TextAlign.center),
            Padding(
                padding: EdgeInsets.fromLTRB(20, 20, 20, 20),
                child: Text("obdCode: 301\n definition: Random/Multiple Cylinder Misfire Detected",
                    style: TextStyle(fontSize: 22))),
            IconButton(icon: Icon(Icons.picture_as_pdf), onPressed: (){},alignment: Alignment.bottomRight)
          ],
        ),
      ),
    );
  }

}