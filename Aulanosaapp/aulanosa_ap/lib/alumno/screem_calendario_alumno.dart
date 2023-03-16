// ignore_for_file: use_key_in_widget_constructors, camel_case_types, prefer_typing_uninitialized_variables, prefer_const_constructors, annotate_overrides, unused_import, unnecessary_import, non_constant_identifier_names, prefer_interpolation_to_compose_strings, unused_local_variable, avoid_unnecessary_containers, prefer_const_literals_to_create_immutables

import 'package:aulanosa_ap/objetosNecesarios/menu_widget.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_zoom_drawer/flutter_zoom_drawer.dart';
import 'package:table_calendar/table_calendar.dart';

//Pagina que mostrara el calendario el alumno
class Calendario_alumno extends StatefulWidget {
  Calendario_alumno2 createState() => Calendario_alumno2();
}

class Calendario_alumno2 extends State<Calendario_alumno> {
  var size, heightA, widthA;
  DateTime hoy = DateTime.now();
  late double alturaPantalla;
  late double anchoPantalla;

  void dia_seleccionado(DateTime dia, DateTime diaFocus) {
    setState(() {
      hoy = dia;
    });
  }

  Container printarContainer() {
    return Container(color: Colors.red);
  }

  @override
  Widget build(BuildContext context) {
    setState(() {
      size = MediaQuery.of(context).size;
      alturaPantalla = size.height;
      anchoPantalla = size.width;
    });

    Widget calendario() {
      return Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(children: [
            Container(
              decoration: BoxDecoration(
                  color: Color.fromARGB(255, 72, 122, 216),
                  border: Border.all(
                      color: Color.fromARGB(255, 48, 92, 174), width: 3),
                  borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(10),
                      topRight: Radius.circular(10))),
              child: TableCalendar(
                locale: "es_Es",
                focusedDay: hoy,
                firstDay: DateTime.utc(2010, 01, 1),
                lastDay: DateTime.utc(2040, 12, 31),
                daysOfWeekStyle: DaysOfWeekStyle(
                    weekendStyle: TextStyle(
                        shadows: <Shadow>[
                          Shadow(
                            offset: Offset(2, 2),
                            blurRadius: 1.0,
                            color: Color.fromARGB(255, 48, 92, 174),
                          ),
                        ],
                        color: Colors.white,
                        fontSize: 15,
                        fontWeight: FontWeight.bold),
                    weekdayStyle: TextStyle(
                        shadows: <Shadow>[
                          Shadow(
                            offset: Offset(2, 2),
                            blurRadius: 1.0,
                            color: Color.fromARGB(255, 48, 92, 174),
                          ),
                        ],
                        color: Colors.white,
                        fontSize: 15,
                        fontWeight: FontWeight.bold)),
                headerStyle: HeaderStyle(
                    formatButtonVisible: false,
                    titleCentered: true,
                    titleTextStyle: TextStyle(
                      color: Colors.white,
                      fontSize: 25,
                      shadows: <Shadow>[
                        Shadow(
                          offset: Offset(2, 2),
                          blurRadius: 4.0,
                          color: Color.fromARGB(255, 72, 122, 216),
                        ),
                      ],
                    ),
                    decoration: BoxDecoration(
                        color: Color.fromARGB(255, 48, 92, 174),
                        borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(10),
                            topRight: Radius.circular(10))),
                    leftChevronIcon: Icon(
                      Icons.chevron_left,
                      color: Colors.white,
                    ),
                    rightChevronIcon:
                        Icon(Icons.chevron_right, color: Colors.white)),
                calendarStyle: CalendarStyle(
                  todayDecoration: BoxDecoration(color: Colors.transparent),
                  selectedDecoration: BoxDecoration(
                      color: Color.fromARGB(255, 48, 92, 174),
                      border: Border.all(
                          color: Color.fromARGB(255, 48, 92, 174), width: 3)),
                  selectedTextStyle: TextStyle(color: Colors.white),
                  tablePadding:
                      EdgeInsets.symmetric(vertical: 10.0, horizontal: 10.0),
                  weekendTextStyle: TextStyle(
                      color: Colors.white,
                      fontSize: 15,
                      shadows: <Shadow>[
                        Shadow(
                          offset: Offset(2, 2),
                          blurRadius: 1.0,
                          color: Color.fromARGB(255, 48, 92, 174),
                        ),
                      ]),
                  defaultTextStyle: TextStyle(
                      color: Colors.white,
                      fontSize: 15,
                      shadows: <Shadow>[
                        Shadow(
                          offset: Offset(2, 2),
                          blurRadius: 1.0,
                          color: Color.fromARGB(255, 48, 92, 174),
                        ),
                      ]),
                ),
                selectedDayPredicate: (dia) => isSameDay(dia, hoy),
                onDaySelected: dia_seleccionado,
                calendarBuilders: CalendarBuilders(
                  markerBuilder: (context, day, events) {
                    //Cantidad de "citas"
                    var citas = "5";
                    //Retornamos el container con el numero de citas, ESTO ES TEMPORAL YA QUE TENDREMOS QUE RECOGER ESA CANTIDAD
                    //DE LA BBDD
                    return Align(
                        alignment: Alignment.bottomRight,
                        child: Container(
                            width: 20,
                            height: 20,
                            decoration: BoxDecoration(
                                shape: BoxShape.circle, color: Colors.cyan),
                            child: Text(
                              citas,
                              style: TextStyle(
                                  color: Color.fromARGB(255, 48, 92, 174),
                                  fontWeight: FontWeight.bold),
                              textAlign: TextAlign.center,
                            )));
                  },
                ),
              ),
            )
          ]));
    }

    return Scaffold(
      backgroundColor: Color.fromARGB(255, 72, 122, 216),
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 48, 92, 174),
        title: Text('Calendario alumno'),
        leading: MenuWidget(),
      ),
      body: SafeArea(
          top: true,
          child: Stack(
            children: [
              Column(
                children: [
                  Container(
                      margin: EdgeInsets.only(top: alturaPantalla * 0.1),
                      child: calendario())
                ],
              ),
              Align(
                alignment: Alignment.bottomLeft,
                child: Image.asset(
                  "assets/images/logoDark.png",
                  width: 717 * 0.3,
                  height: 445 * 0.3,
                ),
              )
            ],
          )),
    );

    //Fechas de examenes, entregas de proyecto, evaluacion
  }
}
