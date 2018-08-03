import '../css/main.scss';
import storefront from '@storefront/core';

import './library';
import './tags';
import Modal from './modal.js'
// import breadcrumbs from '@storefront/breadcrumbs'

const app = new storefront({
  customerId: 'cvshealth',
  area: 'Production',
  collection: 'productsLeaf',

  structure: {
    id: 'id',
    title: 'title',
    price: 'price',
    image: 'image'

    // define your data structure here!
  },

  search: {
    fields: ['*']
  },

  autocomplete: {
    navigations: {
      // ADD Navigations Here
      // 'data.navigation.name': 'Customer Friendly Name',

    },
    products: {
      count: 20
    },
    recommendations: false
  },

  services: {
    logging: {
      level: 'debug',
      debug: {
        // tracker: true,
        // flux: true,
        // lifecycle: true,
        // aliasing: true,
        // observer: true,
      }
    },
    recommendations: false
  }

  // put the rest of your configuration here!
});

// attach your top-level components here!
// components nested under <app> will be mounted automatically

app.mount('app');
app.mount('my-modal')
// app.mount('gb-breadcrumbs')
