import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
