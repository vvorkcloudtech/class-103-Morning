import React from 'react';
import { MDBDataTable } from 'mdbreact';


const DatatablePage = () => {
  const data = {
    columns: [
      {
        
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',        
        field: 'position',
        sort: 'asc',
        width: 270
      },
      
    ],






    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
              },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        
      },
      {
        name: 'Airi Satou',
        position: 'Accountant',
      },
      {
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        
      },
      {
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        
      },
      {
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
      },
      {
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        
      },
      {
        name: 'Sonya Frost',
        position: 'Software Engineer',
        
      },
      {
        name: 'Jena Gaines',
        position: 'Office Manager',
      },
      {
        name: 'Quinn Flynn',
        position: 'Support Lead',
        
      },
      {
        name: 'Charde Marshall',
        position: 'Regional Director',
        
      },
      {
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',

      },
      {
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',

      },
      {
        name: 'Michael Silva',
        position: 'Marketing Designer',

      },
      {
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        
      },
      {
        name: 'Gloria Little',
        position: 'Systems Administrator',
        
      },
      {
        name: 'Bradley Greer',
        position: 'Software Engineer',

      },
      {
        name: 'Dai Rios',
        position: 'Personnel Lead',
        
      },
      {
        name: 'Jenette Caldwell',
        position: 'Development Lead',
        
      },
      {
        name: 'Yuri Berry',
        position: 'Chief Marketing Officer (CMO)',
        
      },
      {
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        
      },
      {
        name: 'Doris Wilder',
        position: 'Sales Assistant',
      },
      {
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
     },
      {
        name: 'Gavin Joyce',
        position: 'Developer',
              },
      {
        name: 'Jennifer Chang',
        position: 'Regional Director',
        
      },
      {
        name: 'Brenden Wagner',
        position: 'Software Engineer',
        
      },
      {
        name: 'Fiona Green',
        position: 'Chief Operating Officer (COO)',
        
      },
      {
        name: 'Shou Itou',
        position: 'Regional Marketing',
      },
      {
        name: 'Michelle House',
        position: 'Integration Specialist',
      },
      {
        name: 'Suki Burks',
        position: 'Developer',

      },
      {
        name: 'Prescott Bartlett',
        position: 'Technical Author',

      },
      {
        name: 'Gavin Cortez',
        position: 'Team Leader',
        
      },
      {
        name: 'Martena Mccray',
        position: 'Post-Sales support',
        
      },
      {
        name: 'Unity Butler',
        position: 'Marketing Designer',
              },
      {
        name: 'Howard Hatfield',
        position: 'Office Manager',
        
      },
      {
        name: 'Hope Fuentes',
        position: 'Secretary',
        
      },
      {
        name: 'Vivian Harrell',
        position: 'Financial Controller',
        
      },
      {
        name: 'Timothy Mooney',
        position: 'Office Manager',

      },
      {
        name: 'Jackson Bradshaw',
        position: 'Director',
        
      },
      {
        name: 'Olivia Liang',
        position: 'Support Engineer',
        
      },
      {
        name: 'Bruno Nash',
        position: 'Software Engineer',

      },
      {
        name: 'Sakura Yamamoto',
        position: 'Support Engineer',
      },
      {
        name: 'Thor Walton',
        position: 'Developer',
              },
      {
        name: 'Finn Camacho',
        position: 'Support Engineer',
              },
      {
        name: 'Serge Baldwin',
        position: 'Data Coordinator',
        
      },
      {
        name: 'Zenaida Frank',
        position: 'Software Engineer',
        
      },
      {
        name: 'Zorita Serrano',
        position: 'Software Engineer',
        
      },
      {
        name: 'Jennifer Acosta',
        position: 'Junior Javascript Developer',
             },
      {
        name: 'Cara Stevens',
        position: 'Sales Assistant',
        
      },
      {
        name: 'Hermione Butler',
        position: 'Regional Director',

      },
      {
        name: 'Lael Greer',
        position: 'Systems Administrator',

      },
      {
        name: 'Jonas Alexander',
        position: 'Developer',
              },
      {
        name: 'Shad Decker',
        position: 'Regional Director',
        
      },
      {
        name: 'Michael Bruce',
        position: 'Javascript Developer',
        
      },
      {
        name: 'Donna Snider',
        position: 'Customer Support',
        
      }
    ]
  };

  return (
      <div>
    <MDBDataTable
     autoWidth striped
      striped
      bordered
      small
      data={data}
    />
      

     </div>
  );
}

export default DatatablePage;