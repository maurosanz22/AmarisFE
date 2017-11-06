import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../../services/usersService";

@Component({
  selector: 'clients-component',
  templateUrl: './clients.template.html',
  styleUrls: ['./clients.styles.scss']
})
export class ClientsComponent {

    public users = [];

    constructor(private router: Router, private userService: UsersService) {}

    ngOnInit() {
        this.userService.getAll((response) => {
            this.users = response.clients;
        });
    }
}