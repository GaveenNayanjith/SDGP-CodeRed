import 'package:flutter/material.dart';

class DefectHis extends StatefulWidget{
  @override
  _DefectHisState createState() => _DefectHisState();
}

class _DefectHisState extends State<DefectHis>{
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.deepOrangeAccent,
          title: Text("Defect History",style: Theme.of(context).textTheme.headline6,)
      ),
      backgroundColor: Colors.orangeAccent,
      body: Container(
        padding: EdgeInsets.all(30.0),
        child: Column(
          children: <Widget>[
            Text("Your Vehicle is: ",
                style: Theme.of(context).textTheme.headline5,
                textAlign: TextAlign.center),
            Text("Vehicle Type", textAlign: TextAlign.center),
            Text("********", textAlign: TextAlign.center),
            IconButton(icon: Icon(Icons.picture_as_pdf), onPressed: (){},alignment: Alignment.bottomRight)
          ],
        ),
      ),
    );
  }
}