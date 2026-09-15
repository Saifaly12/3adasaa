import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { Navbar } from './components/navbar/navbar';
import { Us } from './components/us/us';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Home, Blog, Navbar, Us, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('adasaa');
}
