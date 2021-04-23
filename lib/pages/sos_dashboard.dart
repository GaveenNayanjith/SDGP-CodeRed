import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutterlogindesign/pages/OBD_code.dart';
import 'package:percent_indicator/linear_percent_indicator.dart';
import 'package:http/http.dart' as http;

class SosDashboard extends StatefulWidget {
  @override
  _SosDashboardState createState() => _SosDashboardState();
}

class _SosDashboardState extends State<SosDashboard> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.deepOrangeAccent,
          title: Text(
            "SOS DASHBOARD",
            style: Theme.of(context).textTheme.headline6,
          )),
      backgroundColor: Colors.orangeAccent,
      body: Container(
        padding: EdgeInsets.all(30.0),
        child: Column(
          children: <Widget>[
            LinearPercentIndicator(
              center: Text("Vehicle Condition"),
              animation: true,
              width: MediaQuery.of(context).size.width - 60,
              animationDuration: 4000,
              lineHeight: 20.0,
              percent: 1.0,
              linearStrokeCap: LinearStrokeCap.roundAll,
              progressColor: Colors.blue,
            ),
            Text("Your Vehicle is: ",
                style: Theme.of(context).textTheme.headline5,
                textAlign: TextAlign.center),
            Text("BMW 318i", textAlign: TextAlign.center),
            Text("CBC - 1396", textAlign: TextAlign.center),
            Padding(
                padding: EdgeInsets.fromLTRB(20, 20, 20, 20),
                child: Text("obdCode: 301\n definition: Random/Multiple Cylinder Misfire Detected",
                    style: TextStyle(fontSize: 22))),
            /*FutureBuilder<OBDcode>(
                //future: getOBDcode(),
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    final OBD = snapshot.data;
                    return Text(
                        "OBD code: ${OBD.OBD_code}\n Definiction: ${OBD.Definiction}");
                  } else if (snapshot.hasError) {
                    return Text(snapshot.error.toString());
                  }
                }),*/
            /*var characteristics = service.characteristics;
    for(BluetoothCharacteristic c in characteristics)
    {
      List<int> value = await c.read();
      print(value);
    }

    await c.write([0x12, 0x34])*/
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        type: BottomNavigationBarType.fixed,
        backgroundColor: Colors.orange,
        iconSize: 40,
        selectedFontSize: 20,
        unselectedFontSize: 10,
        items: [
          BottomNavigationBarItem(
              icon: Icon(
                Icons.call,
              ),
              backgroundColor: Colors.yellowAccent,
              title: Text(
                "Dial",
                style: TextStyle(color: Colors.black),
              )),
          BottomNavigationBarItem(
              icon: Icon(Icons.contact_phone),
              title: Text(
                "Service No",
                style: TextStyle(color: Colors.black),
              )),
          BottomNavigationBarItem(
              icon: Icon(Icons.picture_as_pdf),
              title: Text(
                "Convert PDF",
                style: TextStyle(color: Colors.black),
              )),
        ],
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}
/*Future<OBDcode> getOBDcode() async {
  final url = "http://172.31.37.170/localhost/obd/getObdCodes.php";
  final response =await http.get(url);

  if(response.statusCode --200){
    final jsonOBD = jsonDecode(response.body);
    return OBDcode.fromJson(jsonOBD);
  }else{
    throw Exception();
  }*/
