import 'package:flutter/material.dart';

class DefectHis extends StatefulWidget {
  @override
  _DefectHisState createState() => _DefectHisState();
}

class _DefectHisState extends State<DefectHis> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.deepOrangeAccent,
          title: Text(
            "Defect History",
            style: Theme.of(context).textTheme.headline6,
          )),
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
            /*// Reads all descriptors
var descriptors = characteristic.descriptors;
for(BluetoothDescriptor d in descriptors) {
    List<int> value = await d.read();
    print(value);
}

// Writes to a descriptor
await d.write([0x12, 0x34])*/
            IconButton(
                icon: Icon(Icons.picture_as_pdf),
                onPressed: () {},
                alignment: Alignment.bottomRight)
          ],
        ),
      ),
    );
  }
}
