import 'package:flutter/material.dart';

class UnitBox extends StatefulWidget {

  late String title;
  UnitBox({super.key,required String title}){
    this.title = title;
  }

  @override
  State<UnitBox> createState() => _UnitBoxState();
}

class _UnitBoxState extends State<UnitBox> {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      width: 100,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        border: Border.all(),
        borderRadius: BorderRadius.all(Radius.circular(10)),
      ),
      child: InkWell(
        child: Text(widget.title),
      ),
    );
  }
}