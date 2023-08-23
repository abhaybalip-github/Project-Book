import 'package:flutter/material.dart';

class ListItem extends StatelessWidget {
  late int Id;
  late String title;
  ListItem({super.key, required int this.Id, required String this.title}) {}

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      width: 200,
      decoration: BoxDecoration(
          border: Border.all(),
          borderRadius: BorderRadius.all(Radius.circular(5))),
      child: Row(
        children: [
          Container(
            margin: EdgeInsets.all(15),
            decoration: BoxDecoration(),
            child: Text('$Id. '),
          ),
          Container(
            margin: EdgeInsets.fromLTRB(15, 0, 25, 0),
            decoration: BoxDecoration(),
            child: Text('$title'),
          ),
          Container(
            decoration: BoxDecoration(),
            child: InkWell(
              child: Icon(Icons.cancel, color: Colors.red),
              onTap: null,
            ),
          )
        ],
      ),
    );
  }
}
