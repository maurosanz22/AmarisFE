import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PoliciesService } from "../../services/policiesServices";
import { UsersService } from "../../services/usersService";


@Component({
  selector: 'policies-component',
  templateUrl: './policies.template.html',
  styleUrls: ['./policies.styles.scss']
})
export class PoliciesComponent {

    public policies = [];
    public userName: string;
    private userId: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private policiesService: PoliciesService, private usersService: UsersService) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.userId = params['id'];
        });
    }

    ngOnInit() {
        this.usersService.getById(this.userId, (response) => {
            this.userName = response.name;
        });       

        this.policiesService.getByUserId(this.userId, (response) => {
            this.policies = response;
        });       
    }
}