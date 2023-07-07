import notify from 'devextreme/ui/notify';
import { Component, Injectable } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import DataSource from 'devextreme/data/data_source';

export class ProductType {
  id: number;

  text: string;
}

export class Product {
  text: string;

  type: number;
}

const productTypes: ProductType[] = [
  {
    id: 1,
    text: 'All',
  },
  {
    id: 2,
    text: 'Video Players',
  },
  {
    id: 3,
    text: 'Televisions',
  },
  {
    id: 4,
    text: 'Monitors',
  },
  {
    id: 5,
    text: 'Projectors',
  },
];

const products: Product[] = [
  {
    text: 'HD Video Player',
    type: 2,
  },
  {
    text: 'SuperHD Video Player',
    type: 2,
  },
  {
    text: 'SuperLCD 42',
    type: 3,
  },
  {
    text: 'SuperLED 42',
    type: 3,
  },
  {
    text: 'SuperLED 50',
    type: 3,
  },
  {
    text: 'SuperLCD 55',
    type: 3,
  },
  {
    text: 'DesktopLCD 19',
    type: 4,
  },
  {
    text: 'DesktopLCD 21',
    type: 4,
  },
  {
    text: 'DesktopLED 21',
    type: 4,
  },
  {
    text: 'Projector Plus',
    type: 5,
  },
  {
    text: 'Projector PlusHD',
    type: 5,
  },
];

@Injectable()
export class Service {
  getProductTypes(): ProductType[] {
    return productTypes;
  }

  getProducts(): Product[] {
    return products;
  }
}

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css'],
  providers: [Service],
})
export class FlightsSearchComponent {
  items: any[];

  productTypes: ProductType[];

  productsStore: any;

  backButtonOptions: any;

  refreshButtonOptions: any;

  selectBoxOptions: any;

  addButtonOptions: any;

  saveButtonOptions: any;

  printButtonOptions: any;

  settingsButtonOptions: any;

  constructor(service: Service) {
    this.productTypes = service.getProductTypes();
    this.productsStore = new DataSource(service.getProducts());

    this.backButtonOptions = {
      icon: 'back',
      onClick: () => {
        notify('Back button has been clicked!');
      },
    };

    this.refreshButtonOptions = {
      icon: 'refresh',
      onClick: () => {
        notify('Refresh button has been clicked!');
      },
    };

    this.selectBoxOptions = {
      width: 140,
      items: this.productTypes,
      valueExpr: 'id',
      displayExpr: 'text',
      value: this.productTypes[0].id,
      inputAttr: { 'aria-label': 'Categories' },
      onValueChanged: (args) => {
        if (args.value > 1) {
          this.productsStore.filter('type', '=', args.value);
        } else {
          this.productsStore.filter(null);
        }
        this.productsStore.load();
      },
    };

    this.addButtonOptions = {
      icon: 'plus',
      onClick: () => {
        notify('Add button has been clicked!');
      },
    };

    this.saveButtonOptions = {
      text: 'Save',
      onClick: () => {
        notify('Save option has been clicked!');
      },
    };

    this.printButtonOptions = {
      text: 'Print',
      onClick: () => {
        notify('Print option has been clicked!');
      },
    };

    this.settingsButtonOptions = {
      text: 'Settings',
      onClick: () => {
        notify('Settings option has been clicked!');
      },
    };
  }
}
