export const articlesData = [
  {
    id: 1,
    title: 'Reparación de Smartplug',
    category: 'Reparación',
    description: 'Guía de los fallos más comunes de los smartplugs y cómo repararlos',
    content: 'Los Smartplugs, aunque dispositivos bastante robustos, pueden presentar fallas como fallo de conectividad, activación/desactivación aleatoria o incluso inactividad. ' +
    '\n\nEstos fallos pueden darse por 3 componentes clave: <ul><li>el diodo rectificador M7</li><li>el chip integrado conversor BP2525F</li><li>el condensador rectificador 10v 470µF</li></ul> ' +
    '\n\n<ul><li>Fallo del condesador rectificador 10v 470µF: es el problema más común. Suele hincharse, presentar fugas o a veces incluso puede parecer en buen estado. Genera fallos del tipo de activación/desactivación aleatoria o directamente no genera bien la señal de 5v. </li>' +
    '<li>Fallo del chip integrado conversor BP2525F: puede causar errores de conectividad o reinicios al no generar bien la corriente de salida. Suele ir de la mano del diodo rectificador, por lo que se aconseja cambiarlos los dos a la vez. </li>' +
    '<li>Fallo del diodo rectificador M7: es el menos común, pero puede causar fallos de reinicios al no estabilizar la corriente alterna de entrada.</li></ul>',
    tags: ['electrónica', 'smarthome', 'iot']
  },
  {
    id: 2,
    title: 'Reparación de Smartswitch',
    category: 'Reparación',
    description: 'Guía de los fallos más comunes de los smartswitches y cómo repararlos',
    content: 'Los Smartswitches, aunque dispositivos duraderos y simples, pueden presentar fallas como fallo de conectividad, activación/desactivación aleatoria o incluso inactividad. ' +
    '\n\nEstos fallos pueden darse por 3 componentes clave: <ul><li>el diodo rectificador M7</li><li>el chip integrado conversor AP8505</li><li>el condensador rectificador 10v 470µF</li></ul> ' +
    '\n\nLo más común es el fallo del condesador rectificador, que suele hincharse o presentar fugas y genera fallos del tipo de activación/desactivación aleatoria. Por otro lado, errores del tipo de fallos de conectividad o reinicios suele ser por el chip integrado conversor.',
    tags: ['electrónica', 'smarthome', 'iot']
  },
  {
    id: 3,
    title: 'PIDs de smartbulbs de SmartLife',
    category: 'Información',
    description: 'Datos técnicos de los PIDs de los smartbulbs de SmartLife',
    content: 'Los PIDs de los dispositivos inteligentes son utilizados para acceder a la configuración de los mismos mediante otras plataformas como Home Assistant.' +
    '\n\nEl listado de PIDs de los smartbulbs es: <ul><li>22: brillo</li><li>23: temperatura de color</li><li>24: color RGB</li><li>25: escena</li><li>26: velocidad</li></ul>',
    tags: ['smarthome', 'iot', 'pid']
  },
  {
    id: 4,
    title: 'PIDs de arenero automático de mascotas genérico de SmartLife',
    category: 'Información',
    description: 'Datos técnicos de los PIDs del arenero automático de mascotas genérico de SmartLife',
    content: 'Los PIDs del arenero automático de mascotas genérico de SmartLife son utilizados para acceder a la configuración de los mismos mediante otras plataformas como Home Assistant.' +
    '\n\nEl listado de PIDs del arenero automático de mascotas es: <ul><li>6: peso</li><li>7: usos al día</li><li>8: tiempo del último uso</li><li>17: deodorización</li><li>22: ¿fault?</li>' +
    '<li>101: limpiar</li><li>102: vacio</li><li>103: estado basura</li><li>104: monitorizando</li><li>105: ¿induction clean?</li><li>106: ¿tiempo limpieza?</li><li>109: ¿?</li>' +
    '<li>111: infrarrojos apagado</li><li>114: bloqueo infantil</li><li>117: tiempo de espera para limpieza</li><li>118: intervalo de tiempo para limpieza</li><li>119: ¿?</li>' +
    '<li>120: ¿limpiando?</li><li>121: ¿?</li><li>122: ¿?</li><li>123: ¿?</li><li>124: cubo lleno</li><li>125: nivel de arena</li><li>126: ¿?</li><li>127: ¿?</li><li>128: ¿?</li><li>130: ¿?</li></ul>',
    tags: ['smarthome', 'iot', 'pid']
  }
];
