import 'dart:convert';

import 'package:flutter/material.dart';
import 'pages/splash_page.dart';

void main(){
  //WidgetsFlutterBinding.ensureInitialized();
  runApp(
      MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'BM AUTO CARE',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: SplashPage(),
    );
  }
}

