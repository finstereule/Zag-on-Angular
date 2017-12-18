import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-slider',
  templateUrl: './collection-slider.component.html',
  styleUrls: ['./collection-slider.component.css']
})
export class CollectionSliderComponent implements OnInit {

  newCollection = [
    {title: "All-purpose saddle pad",
     description: "Custom all-purpose thick saddle pad (winter version). Wool inside.",
     price: 180
    },
    {title: "Dressage saddle pad",
      description: "Saddle pad (winter version). Wool inside.",
      price: 180
    },
    {title: "All-purpose saddle pad",
      description: "Custom all-purpose saddle pad. Wool inside.",
      price: 180
    },
    {title: "Show jumping saddle pad",
      description: "Custom jumping saddle pad (summer edition). Wool inside.",
      price: 180
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
