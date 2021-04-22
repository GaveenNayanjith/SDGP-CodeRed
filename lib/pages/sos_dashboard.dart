
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:percent_indicator/linear_percent_indicator.dart';

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
                center: Text("Vehicle Condition"),animation: true,
                width: MediaQuery.of(context).size.width - 60,
                animationDuration: 4000,
                lineHeight: 20.0,
                percent: 0.9,
                linearStrokeCap: LinearStrokeCap.roundAll,
                progressColor: Colors.blue,
              ),
              Text("Your Vehicle is: ",
                  style: Theme.of(context).textTheme.headline5,
                  textAlign: TextAlign.center),
              Text("Vehicle Type", textAlign: TextAlign.center),
              Text("********", textAlign: TextAlign.center),
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
          BottomNavigationBarItem(icon: Icon(
            Icons.call,
          ),backgroundColor:Colors.yellowAccent,title: Text("Dial",style: TextStyle(color: Colors.black),)),
          BottomNavigationBarItem(icon: Icon(
              Icons.contact_phone
          ),title: Text("Service No",style: TextStyle(color: Colors.black),)),
          BottomNavigationBarItem(icon: Icon(
              Icons.picture_as_pdf
          ),title: Text("Convert PDF",style: TextStyle(color: Colors.black),)),
        ],
        onTap: (index){
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}
