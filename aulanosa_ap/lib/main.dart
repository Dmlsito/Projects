import 'package:aulanosa_ap/alumno/screem_calendario_alumno.dart';
import 'package:aulanosa_ap/alumno/screem_proyecto_alumno.dart';
import 'package:flutter/material.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'alumno/screem_mensajeria_alumno.dart';

Future main() async {
  initializeDateFormatting().then((_) => runApp(const MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: Proyecto_alumno());
  }
}
