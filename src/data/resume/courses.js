const courses = [
  {
    title: 'ELECTROMAGNETIC THEORY',
    number: 'B/T/212',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'CIRCUIT ANALYSIS AND SYNTHESIS',
    number: 'B/T/212',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'SIGNALS AND SYSTEMS',
    number: 'B/T/213',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'DIGITAL LOGIC CIRCUITS',
    number: 'B/T/214',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'ANALOG CIRCUITS - I',
    number: 'B/T/215',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'MATHEMATICS III',
    number: 'B/MAT/T/216',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'ANALOG CIRCUITS - I LAB',
    number: 'B/S/211',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'DIGITAL CIRCUITS - I LAB',
    number: 'B/S/212',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'CIRCUIT THEORY LAB',
    number: 'B/S/213',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'SEMICONDUCTOR MATERIAL AND DEVICE LAB',
    number: 'B/S/214',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Analog Circuits II',
    number: 'B/T/221',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Circuits and Systems',
    number: 'B/T/222',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Analog Communication Systems',
    number: 'B/T/223',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Transmission Lines and Waveguides',
    number: 'B/T/224',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Data Structures and Algorithms',
    number: 'B/T/225',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Analog Circuits II Lab',
    number: 'B/S/221',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Circuits II Lab',
    number: 'B/S/222',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Analog Communication Lab',
    number: 'B/S/223',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Data Structures Lab',
    number: 'B/S/224',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Microprocessors and Microcontrollers',
    number: 'B/T/311',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Control Engineering',
    number: 'B/T/312',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Communication Systems',
    number: 'B/T/313',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Antennas and Propagation',
    number: 'B/T/314',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Computer Organization and Architecture',
    number: 'B/T/315',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Analog CMOS Design and Technology',
    number: 'B/T/316',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Microprocessors and Microcontrollers Lab',
    number: 'B/S/311',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Control Engineering Lab',
    number: 'B/S/312',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Communication Lab',
    number: 'B/S/313',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Signal Processing',
    number: 'B/T/321',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Switching and Computer Networks',
    number: 'B/T/322',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Control Systems',
    number: 'B/T/323',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Operating System',
    number: 'H/T/324',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Embedded Systems',
    number: 'H/T/325',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'IC Design Lab',
    number: 'B/S/321',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Signal Processing Lab',
    number: 'B/S/322',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Communication Networks Lab',
    number: 'B/S/323',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Digital Control Lab',
    number: 'B/S/324',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Mathematics I',
    number: 'BS/MTH/T111',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Mathematics II ',
    number: 'BS/MTH/T22',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'CHEMISTRY',
    number: 'BS/CH/TP103',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Physics',
    number: 'BS/PH/TP104',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Basic Electrical Engineering',
    number: 'ES/EE/T101A',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Basic Electronics',
    number: 'ES/ BE/T102B',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Engineering Mechanics',
    number: 'ES/EM/T103A',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Computer Programming & Numerical Method',
    number: 'ES/CM/TP104A',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Electrical & Electronics Laboratory',
    number: 'ES/EL/P105B',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Engineering Drawing',
    number: 'ES/ED/P106',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
  {
    title: 'Workshop',
    number: 'ES/WS/P107A',
    link: 'http://www.jaduniv.edu.in/',
    university: 'Jadavpur',
  },
];

export default courses;
