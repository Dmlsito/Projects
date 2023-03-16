// ignore_for_file: implementation_imports, prefer_const_constructors, unnecessary_import, unused_import

import 'package:aulanosa_ap/objetosNecesarios/menu_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

//Pagina para editar/mostrar AdminProyectos
class AdminProyectos extends StatefulWidget {
  const AdminProyectos({super.key});

  @override
  State<AdminProyectos> createState() => _AdminProyectosState();
}

class _AdminProyectosState extends State<AdminProyectos> {
  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          // ignore: prefer_const_constructors
          backgroundColor: Color.fromARGB(255, 48, 92, 174),
          title: Text('Gestión Proyectos'),
          leading: MenuWidget(),
        ),
      );
}
