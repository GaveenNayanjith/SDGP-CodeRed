import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutterlogindesign/pages/defect_history.dart';
import 'package:flutterlogindesign/pages/defect_predict.dart';
import 'package:flutterlogindesign/pages/sos_dashboard.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:percent_indicator/percent_indicator.dart';

class VehicleHome extends StatefulWidget {
  @override
  _VehicleHomeState createState() => _VehicleHomeState();
}

class _VehicleHomeState extends State<VehicleHome> {
  bool _value = false;

  FlutterBlue flutterBlue = FlutterBlue.instance;

  void onChanged(bool value) {
    setState(() {
      _value = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepOrangeAccent,
          title: Text(
            "BM AUTO CARE",
            style: Theme.of(context).textTheme.headline5,
          ),
        ),
        backgroundColor: Colors.orangeAccent,
        drawer: new Drawer(
          child: ListView(
            children: <Widget>[
              UserAccountsDrawerHeader(
                accountName: new Text("Team CODE RED"),
                accountEmail: new Text("CodeRed@gmail.com"),
                currentAccountPicture: CircleAvatar(
                  backgroundImage: NetworkImage(""),
                ),
                decoration: new BoxDecoration(color: Colors.orange[700]),
              ),
              ListTile(
                leading: Icon(Icons.person),
                title: Text("Profile"),
              ),
              ListTile(
                leading: Icon(Icons.help),
                title: Text("Help"),
              ),
              ListTile(
                leading: Icon(Icons.details),
                title: Text("About"),
              )
            ],
          ),
        ),
        body: Container(
          padding: EdgeInsets.all(30.0),
          child: GridView.count(
            crossAxisCount: 2,
            children: <Widget>[
              LinearPercentIndicator(
                center: Text("Vehicle Condition"),
                animation: true,
                width: 150.0,
                animationDuration: 4000,
                lineHeight: 20.0,
                percent: 0.9,
                linearStrokeCap: LinearStrokeCap.roundAll,
                progressColor: Colors.blue,
              ),
              Card(
                color: Colors.yellowAccent[100],
                margin: EdgeInsets.all(8.0),
                child: InkWell(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => SosDashboard()));
                  },
                  child: Center(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Icon(
                          Icons.directions_car_sharp,
                          size: 60.0,
                          color: Colors.redAccent,
                        ),
                        Text("SOS Dashboard",
                            style: new TextStyle(
                                fontSize: 17.0, fontWeight: FontWeight.bold))
                      ],
                    ),
                  ),
                ),
              ),
              Card(
                color: Colors.yellowAccent[100],
                margin: EdgeInsets.all(8.0),
                child: InkWell(
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => DefectPr()));
                  },
                  child: Center(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Icon(
                          Icons.home_repair_service,
                          size: 60.0,
                          color: Colors.blueAccent,
                        ),
                        Text("Predict My Defects",
                            style: new TextStyle(
                                fontSize: 17.0, fontWeight: FontWeight.bold))
                      ],
                    ),
                  ),
                ),
              ),
              Card(
                color: Colors.yellowAccent[100],
                margin: EdgeInsets.all(8.0),
                child: InkWell(
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => DefectHis()));
                  },
                  child: Center(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Icon(
                          Icons.history,
                          size: 60.0,
                          color: Colors.green,
                        ),
                        Text(
                          "What's My History",
                          style: new TextStyle(
                              fontSize: 17.0, fontWeight: FontWeight.bold),
                        )
                      ],
                    ),
                  ),
                ),
              ),
              new Container(
                alignment: Alignment.bottomCenter,
                padding: new EdgeInsets.all(32.0),
                child: new Column(
                  children: <Widget>[
                    new IconButton(
                        icon: Icon(Icons.bluetooth),
                        onPressed: () {
                          flutterBlue.startScan(timeout: Duration(seconds: 4));

                          var subscription =
                              flutterBlue.scanResults.listen((results) {
                            for (ScanResult r in results) {
                              print('${r.device.name} found! rssi: ${r.rssi}');
                            }
                          });
                          flutterBlue.stopScan();
                          /*await device.connect();

                  device.disconnect();

                  List<BluetoothService> services = await device.discoverServices();
                  services.forEach((service) {
                  });*/
                        }),
                    new Text("Connect with My car",
                        style: new TextStyle(
                            fontSize: 15.0, fontWeight: FontWeight.bold)),
                  ],
                ),
              )
            ],
          ),
        ));
  }
}
