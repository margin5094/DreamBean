import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';


export interface NavItem {
  // Navigation link
  href: string;
  // Navigation Label
  label: string;
  // Status of Navigation Item
  active: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userSub=this.authService.user.subscribe(user=>{
      this.isAuthenticated= !user ? false:true;
    });

  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
    
  }
  // App name
  appName: string = 'Dream Bean';

  // Navgation items
  navItems: NavItem[] = [
    {href: 'welcome', label: 'Home', active: true},
    {href: 'products', label: 'Products', active: false},
    {href: 'checkout', label: 'Checkout', active: false},
    // {href: 'login', label: 'Sign in', active: false}
  ];


}