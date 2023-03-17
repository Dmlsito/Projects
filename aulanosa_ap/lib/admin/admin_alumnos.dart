// ignore_for_file: implementation_imports, prefer_const_constructors, unused_import, unnecessary_import

import 'package:aulanosa_ap/objetosNecesarios/menu_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

//Pagina para editar/mostrar AdminAlumnos
class AdminAlumnos extends StatefulWidget {
  const AdminAlumnos({super.key});

  @override
  State<AdminAlumnos> createState() => _AdminAlumnosState();
}

class _AdminAlumnosState extends State<AdminAlumnos> {
  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          backgroundColor: Color.fromARGB(255, 48, 92, 174),
          title: Text('Editar Alumnos'),
          leading: MenuWidget(),
        ),
      );
}
