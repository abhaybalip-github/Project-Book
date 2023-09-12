import 'package:flutter/material.dart';
// import 'UnitBox.dart';

// game data
String p1 = 'p1', p2 = 'p2', curr_player = p1;

var game_board = [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8']
];

shieft_player() {
  curr_player = (curr_player==p1) ? p2 : p1;
}

class UnitBox extends StatefulWidget {
  late String title;
  bool change = false;
  UnitBox({super.key, required String this.title});

  @override
  State<UnitBox> createState() => _UnitBoxState();
}

class _UnitBoxState extends State<UnitBox> {
  box_tap() {
    if (!widget.change) {
      widget.change = !widget.change;

      setState(() {
        widget.title = curr_player;
      });

      shieft_player();
    }
  }

  @override
  Widget build(BuildContext context) {
    return InkWell(
      child: Container(
        height: 100,
        width: 100,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          border: Border.all(),
          borderRadius: BorderRadius.all(Radius.circular(10)),
        ),
        child: Text(widget.title),
      ),
      onTap: box_tap,
    );
  }
}

class UnitGrid extends StatefulWidget {
  const UnitGrid({super.key});

  @override
  State<UnitGrid> createState() => _UnitGridState();
}

class _UnitGridState extends State<UnitGrid> {
  List<Widget> row_builder(List<String> row) {
    return row.map((e) => UnitBox(title: e)).toList();
  }

  List<Widget> col_builder(List<List<String>> board) {
    return board.map((e) => Row(children: row_builder(e))).toList();
  }

  board_builder() {
    return ListView(
      // mainAxisAlignment: MainAxisAlignment.center,
      // crossAxisAlignment: CrossAxisAlignment.center,
      children: col_builder(game_board),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: board_builder(),
    );
  }
}