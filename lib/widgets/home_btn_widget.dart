import 'package:flutter/material.dart';
import 'package:flutterlogindesign/utils/color.dart';

class HomeButtonWidget extends StatelessWidget {
  var btnText ="";
  var onClick;


  HomeButtonWidget({this.btnText, this.onClick});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onClick,
      child: Container(
        width: 200,
        height: 40,
        decoration: BoxDecoration(
          gradient: LinearGradient(
              colors: [greenColors, greenLightColors],
              end: Alignment.centerLeft,
              begin: Alignment.centerRight),
          borderRadius: BorderRadius.all(
            Radius.circular(100),
          ),
        ),
        alignment: Alignment.center,
        child: Text(
          btnText,
          style: TextStyle(
              fontSize: 18,
              color: Colors.white,
              fontWeight: FontWeight.bold),
        ),
      ),
    );
  }
}
