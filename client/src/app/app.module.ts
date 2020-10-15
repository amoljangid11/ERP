import { NgModule,Input,Directive } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import {ModalModule} from "ng2-modal";
import {Md2Module} from 'md2';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {ButtonModule,OverlayPanelModule} from 'primeng/primeng';
import {TreeTableModule,TreeNode,SharedModule} from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'angular-tree-component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { Ng2UploaderModule } from 'ng2-uploader';
import { FileUpload } from 'ng2-fileupload';
import {DropdownTreeviewModule} from 'ng2-dropdown-treeview';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OpeningsposComponent } from './Setup/recruitment/openingspos/openingspos.component';
import { ApprovereqComponent } from './Setup/recruitment/approvereq/approvereq.component';
import { RejectreqComponent } from './Setup/recruitment/rejectreq/rejectreq.component';
import { CandidateComponent } from './Setup/recruitment/candidate/candidate.component';
import{ InterviewComponent } from './Setup/recruitment/interview/interview.component';
import { ShortlistComponent } from './Setup/recruitment/shortlist/shortlist.component'; 
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleComponent } from './module/module.component';
import { SiteConfigComponent } from './site-config/site-config.component';
import { OrganizationComponent } from './organization/organization.component';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { ServiceReqComponent } from './service-req/service-req.component';
import { MdButtonModule, MdCardModule,MdGridListModule, MdMenuModule, MdToolbarModule, MdIconModule,MdCheckboxModule,
  MdInputModule,MdTabsModule,MaterialModule,MdSidenavModule,MdChipsModule,MdTooltipModule,MdSnackBarModule
  ,MdButtonToggleModule ,MdDialogModule,MdSelectModule,MdAutocompleteModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule, Response} from '@angular/http';
import {AccordionModule} from 'primeng/primeng'; 
import {TabViewModule} from 'primeng/primeng';    //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';   
import 'hammerjs';
import { WizardConfigComponent } from './wizard-config/wizard-config.component';
import {LoginComponent } from './login/login.component';
import {UserService } from './user.service';
import {EventSesrvice} from './event'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{tokenNotExpired} from 'angular2-jwt';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard'

import { DashboardComponent } from './Setup/dashboard/dashboard.component';
import { SelfServiceComponent } from './Setup/self-service/self-service.component';
import { ServiceRequestComponent } from './Setup/service-request/service-request.component';
import { HumanResourceComponent } from './Setup/human-resource/human-resource.component';
import { AppraisalComponent } from './Setup/appraisal/appraisal.component';
import { BackgroundCheckComponent } from './Setup/background-check/background-check.component';
import { AnalyticsComponent } from './Setup/analytics/analytics.component';
import { SetupRootComponent } from './Setup/setup-root/setup-root.component';
/*import { LeavesComponent } from './Setup/self-service/leaves/leaves.component';*/
import { MyDetailsComponent } from './Setup/self-service/my-details/my-details.component';
import { MyHolidaysComponent } from './Setup/self-service/my-holidays/my-holidays.component';
import { HolidayCalenderComponent } from './Setup/self-service/holiday-calender/holiday-calender.component';
import { MyTeamComponent } from './Setup/self-service/my-team/my-team.component';

import { CategoriesComponent } from './Setup/service-request/categories/categories.component';
import { RequestTypeComponent } from './Setup/service-request/request-type/request-type.component';
import { PriorityComponent } from './Setup/service-request/priority/priority.component';
import { SettingsComponent } from './Setup/service-request/settings/settings.component';
import { EmployeeComponent } from './Setup/human-resource/employee/employee.component';
import { HolidayManagementComponent } from './Setup/human-resource/holiday-management/holiday-management.component';
import { LeaveManagementComponent } from './Setup/human-resource/leave-management/leave-management.component';
import { EmployeeManagementComponent } from './Setup/human-resource/employee-management/employee-management.component';
import { ConfigurationBgComponent } from './Setup/background-check/configuration-bg/configuration-bg.component';
import { ScreeningTypeComponent } from './Setup/background-check/screening-type/screening-type.component';
import { AgenciesComponent } from './Setup/background-check/agencies/agencies.component';
import { ScreeningComponent } from './Setup/background-check/screening/screening.component';
import { EmployeeCandidateComponent } from './Setup/background-check/employee-candidate/employee-candidate.component';
import { ProfileComponent } from './profile/profile.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SiteComponent } from './Setup/site/site.component';
import { SitePreferenceComponent } from './Setup/site/site-preference/site-preference.component';
import { IdentityCodesComponent } from './Setup/site/general/identity-codes/identity-codes.component';
import { GenderComponent } from './Setup/site/general/gender/gender.component';
import { MaritalStatusComponent } from './Setup/site/general/marital-status/marital-status.component';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { EthnicCodeComponent } from './Setup/site/general/ethnic-code/ethnic-code.component';
import { CountriesComponent } from './Setup/site/Location/countries/countries.component';
import { StatesComponent } from './Setup/site/Location/states/states.component';
import { CitiesComponent } from './Setup/site/Location/cities/cities.component';
import { GeoGroupsComponent } from './Setup/site/Location/geo-groups/geo-groups.component';
import { NumFormatComponent } from './Setup/site/general/num-format/num-format.component';
import { CurrenciesComponent } from './Setup/site/currency/currencies/currencies.component';
import { CurrencyConversionsComponent } from './Setup/site/currency/currency-conversions/currency-conversions.component';
import { TimeZoneComponent } from './Setup/site/general/time-zone/time-zone.component';
import { PrefixesComponent } from './Setup/site/general/prefixes/prefixes.component';
import { NationalitiesComponent } from './Setup/site/general/nationalities/nationalities.component';
import { LicenseComponent } from './Setup/site/general/license/license.component';
import { NationalityContextComponent } from './Setup/site/general/nationality-context/nationality-context.component';
import { AccountClassComponent } from './Setup/site/general/account-class/account-class.component';
import { EmailComponent } from './Setup/site/general/email/email.component';
import { RoleComponent } from './Setup/human-resource/role/role.component';
import { ManageHolidayComponent } from './Setup/human-resource/holiday-management/manage-holiday/manage-holiday.component';
import { LeaveMoptionComponent } from './Setup/human-resource/leave-management/leave-moption/leave-moption.component';
import { EmpSummaryComponent } from './Setup/human-resource/leave-management/emp-summary/emp-summary.component';
import { AddEmpleaveComponent } from './Setup/human-resource/leave-management/add-empleave/add-empleave.component';
import { ManageHolidaygroupComponent } from './Setup/human-resource/holiday-management/manage-holidaygroup/manage-holidaygroup.component';
import { ExitTypesComponent } from './Setup/human-resource/exit-procedure/exit-types/exit-types.component';
import { ExitInterviewquestionComponent } from './Setup/human-resource/exit-procedure/exit-interviewquestion/exit-interviewquestion.component';
import { ExitSettingComponent } from './Setup/human-resource/exit-procedure/exit-setting/exit-setting.component';
import { AllExitProceduresComponent } from './Setup/human-resource/exit-procedure/all-exit-procedures/all-exit-procedures.component';
import { EmployeeTabsComponent } from './Setup/human-resource/emp-config/employee-tabs/employee-tabs.component';
import { EmploymentStatusComponent } from './Setup/human-resource/emp-config/employment-status/employment-status.component';
import { PayFrequencyComponent } from './Setup/human-resource/emp-config/pay-frequency/pay-frequency.component';
import { RemunerationBasisComponent } from './Setup/human-resource/emp-config/remuneration-basis/remuneration-basis.component';
import { JobTitlesComponent } from './Setup/human-resource/emp-config/job-titles/job-titles.component';
import { PositionsComponent } from './Setup/human-resource/emp-config/positions/positions.component';
import { CompetencyLevelsComponent } from './Setup/human-resource/emp-config/competency-levels/competency-levels.component';
import { EducationLevelsComponent } from './Setup/human-resource/emp-config/education-levels/education-levels.component';
import { LanguagesComponent } from './Setup/human-resource/emp-config/languages/languages.component';
import { LeaveTypesComponent } from './Setup/human-resource/emp-config/leave-types/leave-types.component';
import { AttendanceStatusComponent } from './Setup/human-resource/emp-config/attendance-status/attendance-status.component';
import { BankAccounttypesComponent } from './Setup/human-resource/emp-config/bank-accounttypes/bank-accounttypes.component';
import { IdentityDocumentsComponent } from './Setup/human-resource/emp-config/identity-documents/identity-documents.component';
import { EEOCCategoriesComponent } from './Setup/human-resource/emp-config/eeoc-categories/eeoc-categories.component';
import { VeteranStatusComponent } from './Setup/human-resource/emp-config/veteran-status/veteran-status.component';
import { MilitaryServicetypesComponent } from './Setup/human-resource/emp-config/military-servicetypes/military-servicetypes.component';
import { ExternalUsersComponent } from './Setup/human-resource/contacts/external-users/external-users.component';
import { VendorsComponent } from './Setup/human-resource/contacts/vendors/vendors.component';
import { ClientsComponent } from './Setup/human-resource/contacts/clients/clients.component';
import { ContactProjectsComponent } from './Setup/human-resource/contacts/contact-projects/contact-projects.component';
import { InitiateCheckstatusComponent } from './Setup/human-resource/exit-procedure/initiate-checkstatus/initiate-checkstatus.component';
import { WorkEligibilityComponent } from './Setup/human-resource/emp-config/work-eligibility/work-eligibility.component';




import { RestangularModule, Restangular} from 'ngx-restangular';
import {Observable} from 'rxjs/Observable';
import { ModuleWithProviders, OpaqueToken } from '@angular/core';
import {NgPipesModule} from 'ngx-pipes';
import {TabsModule} from "ng2-tabs";
import { TimeComponent } from './Setup/time/time.component';
import { CalendarModule } from 'angular-calendar';
import {CalendarComponent} from "ap-angular2-fullcalendar";
import { OfficialComponent } from './Setup/human-resource/employee/official/official.component';
import { DocumentsComponent } from './Setup/human-resource/employee/documents/documents.component';
import { LeaveComponent } from './Setup/human-resource/employee/leave/leave.component';
import { HolidaysComponent } from './Setup/human-resource/employee/holidays/holidays.component';
import { SalaryComponent } from './Setup/human-resource/employee/salary/salary.component';
import { PersonalComponent } from './Setup/human-resource/employee/personal/personal.component';
import { ContactComponent } from './Setup/human-resource/employee/contact/contact.component';
import { SkillsComponent } from './Setup/human-resource/employee/skills/skills.component';
import { JobhistoryComponent } from './Setup/human-resource/employee/jobhistory/jobhistory.component';
import { ExperienceComponent } from './Setup/human-resource/employee/experience/experience.component';
import { EducationComponent } from './Setup/human-resource/employee/education/education.component';
import { TrainingcertificationComponent } from './Setup/human-resource/employee/trainingcertification/trainingcertification.component';
import { MedicalclaimsComponent } from './Setup/human-resource/employee/medicalclaims/medicalclaims.component';
import { DisabiltyComponent } from './Setup/human-resource/employee/disabilty/disabilty.component';
import { VisaimmigrationComponent } from './Setup/human-resource/employee/visaimmigration/visaimmigration.component';
import { CorporateComponent } from './Setup/human-resource/employee/corporate/corporate.component';
import { TimesheetComponent } from './Setup/time/timesheet/timesheet.component';
import { CalendarHeaderComponent } from './Setup/time/timesheet/calendar-header.component';
import { DateTimePickerComponent } from './Setup/time/timesheet/date-time-picker.component';
import { colors } from './Setup/time/timesheet/colors';

import { DemoComponent } from './Setup/time/timesheet/component';

import { EmployeeTimesheetComponent } from './Setup/time/employee-timesheet/employee-timesheet.component';
import { ClientTimeComponent } from './Setup/time/client-time/client-time.component';

import { DefaultTasksComponent } from './Setup/time/default-tasks/default-tasks.component';
import { ProjectsComponent } from './Setup/time/projects/projects.component';
import { OrganizationsComponent } from './Setup/organizations/organizations.component';
import { DepartmentsComponent } from './Setup/organizations/departments/departments.component';
import { BusinessUnitsComponent } from './Setup/organizations/business-units/business-units.component';
/*import { CorporateCardComponent } from './Setup/human-resource/employee/corporate-card/corporate-card.component';
*/import { EmpWorkeligibilityComponent } from './Setup/human-resource/employee/emp-workeligibility/emp-workeligibility.component';
import { EmpRemunerationComponent } from './Setup/human-resource/employee/emp-remuneration/emp-remuneration.component';
import { AdditionalDetailsComponent } from './Setup/human-resource/employee/additional-details/additional-details.component';
import { SecurityCredentialsComponent } from './Setup/human-resource/employee/security-credentials/security-credentials.component';
import { DependencyComponent } from './Setup/human-resource/employee/dependency/dependency.component';
import { ConfigurationTimeComponent } from './Setup/time/configuration-time/configuration-time.component';

import { AnnouncementsComponent } from './Setup/organizations/announcements/announcements.component';
import { PolicyDocumentsComponent } from './Setup/organizations/policy-documents/policy-documents.component';
import { ManageCategoriesComponent } from './Setup/organizations/policy-documents/manage-categories/manage-categories.component';
/*    window.onunload = function () {
            window.localStorage.clear();
    }*/
import { NgUploaderModule } from 'ngx-uploader';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { I18n } from './i18n';
import { DisabledOnSelectorDirective } from './disabled-on-selector.directive';
import { CreateEmployeeComponent } from './Setup/human-resource/create-employee/create-employee.component';
import { ProjectTimeComponent } from './Setup/time/projects/project-time/project-time.component';
import { TasksTimeComponent } from './Setup/time/projects/tasks-time/tasks-time.component';
import { ResourcesTimeComponent } from './Setup/time/projects/resources-time/resources-time.component';
import { CreateprojectComponent } from './Setup/time/createproject/createproject.component';

import { Ng2DragDropModule } from 'ng2-drag-drop';
import { OrganizationInfoComponent } from './Setup/organizations/organization-info/organization-info.component';
import { EmployeeRoleComponent } from './Setup/human-resource/emp-config/employee-role/employee-role.component';
import { LeaveRequestComponent } from './Setup/self-service/leave-request/leave-request.component';
import { MyLeaveComponent } from './Setup/self-service/my-leave/my-leave.component';
import { EmployeeLeaveComponent } from './Setup/self-service/employee-leave/employee-leave.component';

import { AppraisalbackComponent } from './Setup/appraisal/appraisalback/appraisalback.component';
import { ParameterComponent } from './Setup/appraisal/parameter/parameter.component';
import {  QuestionComponent  } from './Setup/appraisal/question/question.component';
import { SkillComponent } from './Setup/appraisal/skill/skill.component';
import { RatingComponent } from './Setup/appraisal/rating/rating.component';
import { InitializeAppraisalComponent } from './Setup/appraisal/initializeappraisal/initializeappraisal.component';
import { ManagerAppraisalComponent } from './Setup/appraisal/managerappraisal/managerappraisal.component';
import { ManagerStatusComponent } from './Setup/appraisal/managerstatus/managerstatus.component';
import { EmployeeStatusComponent } from './Setup/appraisal/employeestatus/employeestatus.component';
import { SelfAppraisalComponent } from './Setup/appraisal/selfappraisal/selfappraisal.component';
import { MyTeamAppraisalComponent } from './Setup/appraisal/myteamappraisal/myteamappraisal.component';

import { RecruitmentComponent } from './Setup/recruitment/recruitment.component';
import { DisciplinaryComponent } from './Setup/disciplinary/disciplinary.component';
import { ViolationtypeComponent } from './Setup/disciplinary/violationtype/violationtype.component';
import { RaiseincidentComponent } from './Setup/disciplinary/raiseincident/raiseincident.component';
import { MyincidentComponent } from './Setup/disciplinary/myincident/myincident.component';
import { TeamincidentComponent } from './Setup/disciplinary/teamincident/teamincident.component';
import { AllincidentComponent } from './Setup/disciplinary/allincident/allincident.component';
import { AllComponent } from './Setup/service-request/all/all.component';
import { All1Component } from './Setup/service-request/all1/all1.component';
import { Approve2Component } from './Setup/service-request/approve2/approve2.component';
import { CancelledComponent } from './Setup/service-request/cancelled/cancelled.component';
import { Cancelled1Component } from './Setup/service-request/cancelled1/cancelled1.component';
import { ClosedComponent } from './Setup/service-request/closed/closed.component';
import { Closed1Component } from './Setup/service-request/closed1/closed1.component';
import { Duetoday1Component } from './Setup/service-request/duetoday1/duetoday1.component';
import { OpenComponent } from './Setup/service-request/open/open.component';
import { Open1Component } from './Setup/service-request/open1/open1.component';
import { Overdue1Component } from './Setup/service-request/overdue1/overdue1.component';
import { Pending1Component } from './Setup/service-request/pending1/pending1.component';
import { Reject2Component } from './Setup/service-request/reject2/reject2.component';
import { RejectedComponent } from './Setup/service-request/rejected/rejected.component';
import { Rejected1Component } from './Setup/service-request/rejected1/rejected1.component';
import { Sentforapproval1Component } from './Setup/service-request/sentforapproval1/sentforapproval1.component';
import { Toapprove1Component } from './Setup/service-request/toapprove1/toapprove1.component';
import { MallComponent } from './Setup/service-request/mall/mall.component';
import { MapproveComponent } from './Setup/service-request/mapprove/mapprove.component';
import { McancelledComponent } from './Setup/service-request/mcancelled/mcancelled.component';
import { MclosedComponent } from './Setup/service-request/mclosed/mclosed.component';
import { MdueTodayComponent } from './Setup/service-request/mdue-today/mdue-today.component';
import { MopenComponent } from './Setup/service-request/mopen/mopen.component';
import { MoverdueComponent } from './Setup/service-request/moverdue/moverdue.component';
import { MrejectComponent } from './Setup/service-request/mreject/mreject.component';
import { MtoapproveComponent } from './Setup/service-request/mtoapprove/mtoapprove.component';
import { TerminateRetirementComponent } from './Setup/human-resource/exit-procedure/terminate-retirement/terminate-retirement.component';
import { ActivtlogComponent } from './Setup/analytics/activtlog/activtlog.component';
import { BackcheckagenComponent } from './Setup/analytics/backcheckagen/backcheckagen.component';
import { BusiunitComponent } from './Setup/analytics/busiunit/busiunit.component';
import { CanddetailsComponent } from './Setup/analytics/canddetails/canddetails.component';
import { DepartComponent } from './Setup/analytics/depart/depart.component';
import { EmpComponent } from './Setup/analytics/emp/emp.component';
import { EmpappraiComponent } from './Setup/analytics/empapprai/empapprai.component';
import { EmpcandscreenComponent } from './Setup/analytics/empcandscreen/empcandscreen.component';
import { EmpleavesumComponent } from './Setup/analytics/empleavesum/empleavesum.component';
import { GrproleComponent } from './Setup/analytics/grprole/grprole.component';
import { GrproleempComponent } from './Setup/analytics/grproleemp/grproleemp.component';
import { HoligrpholiComponent } from './Setup/analytics/holigrpholi/holigrpholi.component';
import { LeavemanoptComponent } from './Setup/analytics/leavemanopt/leavemanopt.component';
import { RecruitComponent } from './Setup/analytics/recruit/recruit.component';
import { SchedinterviewComponent } from './Setup/analytics/schedinterview/schedinterview.component';
import { ServreqComponent } from './Setup/analytics/servreq/servreq.component';
import { TimemananalyComponent } from './Setup/analytics/timemananaly/timemananaly.component';
import { UselogComponent } from './Setup/analytics/uselog/uselog.component';
import { UserempComponent } from './Setup/analytics/useremp/useremp.component';
import { ConfigurationComponent } from './Setup/service-request/configuration/configuration.component';
import { ExpensesComponent } from './Setup/expenses/expenses.component';
import { Expenses1Component } from './Setup/expenses/expenses1/expenses1.component';
import { CategoryComponent } from './Setup/expenses/category/category.component';
import { PaymodeComponent } from './Setup/expenses/paymode/paymode.component';
import { ReceiptsComponent } from './Setup/expenses/receipts/receipts.component';
import { TripsComponent } from './Setup/expenses/trips/trips.component';
import { AssetsComponent } from './Setup/assets/assets.component';
import { Assets1Component } from './Setup/assets/assets1/assets1.component';
import { AssetcategoryComponent } from './Setup/assets/assetcategory/assetcategory.component';
import { MyempexpenseComponent } from './Setup/expenses/myempexpense/myempexpense.component';
import { MyadvancesComponent } from './Setup/expenses/myadvances/myadvances.component';
import { EmployeeadvancesComponent } from './Setup/expenses/employeeadvances/employeeadvances.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DomainComponent } from './Setup/human-resource/emp-config/domain/domain.component'
export function RestangularConfigFactory (RestangularProvider,Restangular,authService,RestangularConfigurer) {

console.log("201")
  RestangularProvider.setBaseUrl('http://localhost:3000');
 // RestangularProvider.setFullResponse(true);
console.log("202")

 RestangularProvider.addResponseInterceptor((data, operation, what, url, response,headers)=> {
   console.log(data)
   console.log(headers)
   response=data;
       return data;
     });

 
 RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params)=> {
  const token=localStorage.getItem('token');

   headers={'Authorization':token}
   return {
     params: Object.assign({}, params, {sort:"name"}),
     headers: headers,
     element: element
   }
 });
    
}




@NgModule({
  declarations: [
    AppComponent,FileSelectDirective,DisabledOnSelectorDirective,
    ModuleComponent,
    SiteConfigComponent,
    OrganizationComponent,
    BusinessUnitComponent,
    ServiceReqComponent,
    WizardConfigComponent,
     LoginComponent,
     DashboardComponent,
     SelfServiceComponent,
     ServiceRequestComponent,
     HumanResourceComponent,
     BackgroundCheckComponent,
     AnalyticsComponent,
     SetupRootComponent,
     /*LeavesComponent,*/
     MyDetailsComponent,
     MyHolidaysComponent,
     HolidayCalenderComponent,
     MyTeamComponent,
     
     CategoriesComponent,
     RequestTypeComponent,
     PriorityComponent,
     SettingsComponent,
     EmployeeComponent,

     /*appraisalcomponent*/
     AppraisalbackComponent,
     AppraisalComponent,
     ParameterComponent,
     QuestionComponent,
     SkillComponent,
     RatingComponent,
     InitializeAppraisalComponent,
     ManagerAppraisalComponent,
     ManagerStatusComponent,
     EmployeeStatusComponent,
     SelfAppraisalComponent,
     MyTeamAppraisalComponent,
   
     
     HolidayManagementComponent,
     LeaveManagementComponent,
     EmployeeManagementComponent,
     ConfigurationBgComponent,
     ScreeningTypeComponent,
     AgenciesComponent,
     ScreeningComponent,
     EmployeeCandidateComponent,
     ProfileComponent,
     SiteComponent,
     SitePreferenceComponent,
     IdentityCodesComponent,
     GenderComponent,
     MaritalStatusComponent,
     EthnicCodeComponent,
     CountriesComponent,
     StatesComponent,
     CitiesComponent,
     GeoGroupsComponent,
     NumFormatComponent ,
     CurrenciesComponent ,
CurrencyConversionsComponent ,
  TimeZoneComponent,
     PrefixesComponent,
     NationalitiesComponent,

     /*expenses*/
     
     

     NationalityContextComponent,
     AccountClassComponent,
     EmailComponent,
     LicenseComponent,
          RoleComponent,
     ManageHolidayComponent,
     LeaveMoptionComponent,
     EmpSummaryComponent,
     AddEmpleaveComponent,
     ManageHolidaygroupComponent,
     ExitTypesComponent,
     ExitInterviewquestionComponent,
     ExitSettingComponent,
     AllExitProceduresComponent,
     EmployeeTabsComponent,
     EmploymentStatusComponent,
     PayFrequencyComponent,
     RemunerationBasisComponent,
     JobTitlesComponent,
     PositionsComponent,
     CompetencyLevelsComponent,
     EducationLevelsComponent,
     LanguagesComponent,
     LeaveTypesComponent,
     AttendanceStatusComponent,
     BankAccounttypesComponent,
     IdentityDocumentsComponent,
     EEOCCategoriesComponent,
     VeteranStatusComponent,
     MilitaryServicetypesComponent,
     ExternalUsersComponent,
     VendorsComponent,
     ClientsComponent,
     ContactProjectsComponent,
     InitiateCheckstatusComponent,
     WorkEligibilityComponent,
     TimeComponent,
     CalendarComponent,
     OfficialComponent,
     DocumentsComponent,
     LeaveComponent,
     HolidaysComponent,
     SalaryComponent,
     PersonalComponent,
     ContactComponent,
     SkillsComponent,
     JobhistoryComponent,
     ExperienceComponent,
     EducationComponent,
     TrainingcertificationComponent,
     MedicalclaimsComponent,
     DisabiltyComponent,
     VisaimmigrationComponent,
     CorporateComponent,
     TimesheetComponent,ClientTimeComponent,
     EmployeeTimesheetComponent,
     DefaultTasksComponent,
     ProjectsComponent,
     OrganizationsComponent,
     DepartmentsComponent ,
     BusinessUnitsComponent ,ConfigurationTimeComponent,DependencyComponent,
     /*CorporateCardComponent*/
     EmpWorkeligibilityComponent,
     EmpRemunerationComponent,
     AdditionalDetailsComponent,
     SecurityCredentialsComponent,
     CreateEmployeeComponent,    
     AnnouncementsComponent,
     PolicyDocumentsComponent,
     ManageCategoriesComponent,
     ProjectTimeComponent,
     TasksTimeComponent,
     ResourcesTimeComponent,CreateprojectComponent, OrganizationInfoComponent, EmployeeRoleComponent, LeaveRequestComponent, MyLeaveComponent, EmployeeLeaveComponent,
     OpeningsposComponent, ApprovereqComponent, RejectreqComponent, RecruitmentComponent, CandidateComponent, InterviewComponent, ShortlistComponent, DisciplinaryComponent, ViolationtypeComponent, RaiseincidentComponent, MyincidentComponent, TeamincidentComponent, AllincidentComponent, AllComponent, All1Component, Approve2Component, CancelledComponent, Cancelled1Component, ClosedComponent, Closed1Component, Duetoday1Component, OpenComponent, Open1Component, Overdue1Component, Pending1Component, Reject2Component, RejectedComponent, Rejected1Component, Sentforapproval1Component, Toapprove1Component, MallComponent, MapproveComponent, McancelledComponent, MclosedComponent, MdueTodayComponent, MopenComponent, MoverdueComponent, MrejectComponent, MtoapproveComponent, TerminateRetirementComponent, ActivtlogComponent, BackcheckagenComponent, BusiunitComponent, CanddetailsComponent, DepartComponent, EmpComponent, EmpappraiComponent, EmpcandscreenComponent, EmpleavesumComponent, GrproleComponent, GrproleempComponent, HoligrpholiComponent, LeavemanoptComponent, RecruitComponent, SchedinterviewComponent, ServreqComponent, TimemananalyComponent, UselogComponent, UserempComponent,
     ConfigurationComponent,
     ExpensesComponent,
     Expenses1Component,
     CategoryComponent,
     PaymodeComponent,
     ReceiptsComponent,
     TripsComponent,
     AssetsComponent,
     Assets1Component,
     AssetcategoryComponent,
     MyempexpenseComponent,
     MyadvancesComponent,
     EmployeeadvancesComponent,
     ForgetpasswordComponent,
     DomainComponent



  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),Ng2DragDropModule.forRoot(),PdfViewerModule ,TreeTableModule,TreeModule ,FullCalendarModule,
    
    DropdownTreeviewModule.forRoot(),CalendarModule.forRoot(),
        FormsModule,ModalModule,Md2Module,Ng2UploaderModule,NgUploaderModule,Ng2SearchPipeModule,
    MdGridListModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdSnackBarModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MaterialModule,
    MdIconModule,
    MdTabsModule,
    MdChipsModule,
    MdSidenavModule,
    MdButtonToggleModule,
    MdDialogModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdDatepickerModule,
    MdNativeDateModule,    
    MdTooltipModule,
    HttpModule,
    AccordionModule,
    AngularMultiSelectModule,
    FlashMessagesModule,
    Ng2SmartTableModule,
    NgPipesModule,
    TabsModule,ReactiveFormsModule,
    RouterModule.forRoot([

      

  {
      path:'', redirectTo:'login', pathMatch:'full',
    },
      {
      path:'login',
      component:LoginComponent,
 
    }, 
        
    {
      path:'profile',
      component:ProfileComponent,
    }, 

    {
      path:'forgetpassword',
      component:ForgetpasswordComponent,
    }, 

      {
      path:'wizard',
      component:WizardConfigComponent,
      canActivate:[AuthGuard],
      children:[
       {
      path:'site',
      
      component:SiteConfigComponent,
       canActivate:[AuthGuard],
       outlet:'frstchild'
    },
    {
         path:'module',
      component:ModuleComponent,
         canActivate:[AuthGuard],
      outlet:'frstchild'
      },
   
     {
      path:'organization',
        canActivate:[AuthGuard],
      component:OrganizationComponent,
      outlet:'frstchild'

    }, {
      path:'business_unit',
         canActivate:[AuthGuard],
      component:BusinessUnitComponent,
      outlet:'frstchild'

    }, {
      path:'service_req',
          canActivate:[AuthGuard], 
      component:ServiceReqComponent,
      outlet:'frstchild'
  
    },
      ]
      },
        {
      path:'setuproot',
      component:SetupRootComponent,
         canActivate:[AuthGuard],
      children:[
       {
      path:'dashboard',
      component:DashboardComponent,
         canActivate:[AuthGuard],
      outlet:'secondchild'
    },
       {
      path:'self-service',
      canActivate:[AuthGuard],
      component:SelfServiceComponent,
      outlet:'secondchild',
       },
       //start children outlet of self service
               {
			      path:'mydetails',
			     canActivate:[AuthGuard],      
			      component:MyDetailsComponent,
			      outlet:'thirdchild',
            children:[
              {
                path:'official',
                component:OfficialComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
             
              {
              path:'documents',
              component:DocumentsComponent,
              canActivate:[AuthGuard],
              outlet:'fourthchild'
               },
              {
                path:'leave',
                component:LeaveComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'holidays',
                component:HolidaysComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'salary',
                component:SalaryComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'personal',
                component:PersonalComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'contact',
                component:ContactComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'skills',
                component:SkillsComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'jobhistory',
                component:JobhistoryComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'experience',
                component:ExperienceComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'education',
                component:EducationComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'trainingcertification',
                component:TrainingcertificationComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'medicalclaims',
                component:MedicalclaimsComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'disability',
                component:DisabiltyComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'dependency',
                component:DependencyComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'visaandimmigration',
                component:VisaimmigrationComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'corporatecard',
                component:CorporateComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'emp-dependency',
                component:DependencyComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'emp_workeligiblity',
                component:EmpWorkeligibilityComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'additionaldetails',
                component:AdditionalDetailsComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
          
               {
                path:'remuneration',
                component:EmpRemunerationComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'securitycredentials',
                component:SecurityCredentialsComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
         
               ]
        
			    },
			   
			    {
			      path:'holidaycalender',
			      canActivate:[AuthGuard],     
			      component:HolidayCalenderComponent,
			      outlet:'thirdchild'
			  
			    },
			    {
			      path:'empteam',
			     canActivate:[AuthGuard],      
			      component:MyTeamComponent,
            outlet:'thirdchild',
            children:[
              {
                path:'official',
                component:OfficialComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
             
              {
                path:'personal',
                component:PersonalComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'contact',
                component:ContactComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'skills',
                component:SkillsComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'jobhistory',
                component:JobhistoryComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'experience',
                component:ExperienceComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'education',
                component:EducationComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              {
                path:'trainingcertification',
                component:TrainingcertificationComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
              
              {
                path:'additionaldetails',
                component:AdditionalDetailsComponent,
                canActivate:[AuthGuard],
                outlet:'fourthchild'
              },
          
         
               ]
			  
			    },
			    {
			      path:'leavereq',
			     canActivate:[AuthGuard],      
			      component:LeaveRequestComponent,
			      outlet:'thirdchild'
			  
			    },
			   
			    {
			      path:'myleave',
			      canActivate:[AuthGuard],     
			      component:EmployeeLeaveComponent,
			      outlet:'thirdchild'
			  
			    },
			    {
			      path:'empleave',
			     canActivate:[AuthGuard],      
			      component:MyLeaveComponent,
			      outlet:'thirdchild'
			  
          },
          
          
         
          {
            path: 'disciplinary',
            component: DisciplinaryComponent,
            canActivate: [AuthGuard],
            outlet: 'secondchild'

          },
          {
            path: 'violationtype',
            component: ViolationtypeComponent,
            canActivate: [AuthGuard],
            outlet: 'thirdchild'

          },
          {
            path: 'raiseincident',
            component: RaiseincidentComponent,
            canActivate: [AuthGuard],
            outlet: 'thirdchild'

          },
          {
            path: 'myincident',
            component: MyincidentComponent,
            canActivate: [AuthGuard],
            outlet: 'thirdchild'

          },
          {
            path: 'teamincident',
            component: TeamincidentComponent,
            canActivate: [AuthGuard],
            outlet: 'thirdchild'

          },
          {
            path: 'allincident',
            component: AllincidentComponent,
            canActivate: [AuthGuard],
            outlet: 'thirdchild'

          },
 
         {
      path:'service-request',
         canActivate:[AuthGuard],
      component:ServiceRequestComponent,
outlet:'secondchild'
    },
         {
      path:'human-resource',
        canActivate:[AuthGuard], 
      component:HumanResourceComponent,
outlet:'secondchild'
    },
        
    {
      path:'appraisal',
      canActivate:[AuthGuard],   
      component:AppraisalComponent,
outlet:'secondchild'
    },
    {
      path: 'recruitment',
      component: RecruitmentComponent,
      canActivate: [AuthGuard],
      outlet: 'secondchild'


    },
    {
      path: 'openingposition',
      component: OpeningsposComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'approved',
      component: ApprovereqComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'rejected',
      component: RejectreqComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'candidates',
      component: CandidateComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'interviews',
      component: InterviewComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'shortlisted',
      component: ShortlistComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'expenses',
      component: ExpensesComponent,
      canActivate: [AuthGuard],
      outlet: 'secondchild'

    },
    {
      path: 'expenses1',
      component: Expenses1Component,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'category',
      component: CategoryComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'paymode',
      component: PaymodeComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'receipts',
      component: ReceiptsComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'trips',
      component: TripsComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'myadvances',
      component: MyadvancesComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'
 },
    {
      path: 'employeeadvances',
      component: EmployeeadvancesComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'
},
    {
      path: 'myempexpenses',
      component: MyempexpenseComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'
},
    {
      path: 'assets',
      component: AssetsComponent,
      canActivate: [AuthGuard],
      outlet:'secondchild'

    },
    {
      path: 'assets1',
      component: Assets1Component,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'

    },
    {
      path: 'assetcategory',
      component: AssetcategoryComponent,
      canActivate: [AuthGuard],
      outlet: 'thirdchild'
},



             {
      path:'backgroundcheck',
      canActivate:[AuthGuard],   
      component:BackgroundCheckComponent,
outlet:'secondchild'
    },

        
             {
              path:'analytics',
              canActivate:[AuthGuard],   
              component:AnalyticsComponent,
              outlet:'secondchild',
              children:[
                {
                  path: 'busiunit',
                  component: BusinessUnitComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'depart',
                  component: DepartComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'grprole',
                  component: GrproleComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'

                },
                {
                  path: 'grproleemp',
                  component: GrproleempComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'useremp',
                  component: UserempComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'emp',
                  component: EmpComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'recruit',
                  component: RecruitComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'canddetails',
                  component: CanddetailsComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'schedinterview',
                  component: SchedinterviewComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'empleavesum',
                  component: EmpleavesumComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'leavemanopt',
                  component: LeavemanoptComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'holigrpholi',
                  component: HoligrpholiComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'backcheckagen',
                  component: BackcheckagenComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'empcandscreen',
                  component: EmpcandscreenComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'uselog',
                  component: UselogComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'activtlog',
                  component: ActivtlogComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                },
                {
                  path: 'servreq',
                  component: ServreqComponent,
                  canActivate: [AuthGuard],
                  outlet: 'fourthchild'
                }
              ]
    },
                 {
      path:'site',
      canActivate:[AuthGuard],    
      component:SiteComponent,
      outlet:'secondchild'
    },
    {
      path:'organization',
      canActivate:[AuthGuard],    
      component:OrganizationsComponent,
      outlet:'secondchild'
    },
    {
      path:'appraisal',
        canActivate:[AuthGuard],   
      component:AppraisalComponent,
      outlet:'secondchild'
  
    },
    {
      path:'appraisalback',
      canActivate:[AuthGuard],   
      component:AppraisalbackComponent,
      outlet:'thirdchild'
    },

    {
      path:'parameter',
        canActivate:[AuthGuard],   
      component:ParameterComponent,
      outlet:'thirdchild'
  
    },

    
    {
      path:'question',
        canActivate:[AuthGuard],   
      component:QuestionComponent,
      outlet:'thirdchild'
  
    },

    {
      path:'skill',
        canActivate:[AuthGuard],   
      component:SkillComponent,
      outlet:'thirdchild'
  
    },

    {
      path:'rating',
        canActivate:[AuthGuard],   
      component: RatingComponent,
      outlet:'thirdchild'
  
    },

    {
      path:'initializeappraisal',
        canActivate:[AuthGuard],   
      component: InitializeAppraisalComponent,
      outlet:'thirdchild'
  
    },

    {
      path:'managerappraisal',
        canActivate:[AuthGuard],   
      component: ManagerAppraisalComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'managerstatus',
        canActivate:[AuthGuard],   
      component: ManagerStatusComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'employeestatus',
        canActivate:[AuthGuard],   
      component: EmployeeStatusComponent,
      outlet:'thirdchild'
  
    },
    {
    path:'selfappraisal',
    canActivate:[AuthGuard],   
    component: SelfAppraisalComponent,
    outlet:'thirdchild'

    },
    {
      path:'myteamappraisal',
      canActivate:[AuthGuard],   
      component: MyTeamAppraisalComponent,
      outlet:'thirdchild'
  
      },

      
    /*{
      path:'leaves',
      canActivate:[AuthGuard],      
      component:LeavesComponent,
      outlet:'thirdchild'
  
    },*/
    
    

    {
      path:'all',
      canActivate:[AuthGuard],     
      component:AllComponent,
      outlet:'thirdchild'
  
    },
    {
      path: 'configuration',
      canActivate: [AuthGuard],
      component: ConfigurationComponent,
      outlet: 'thirdchild'

    },
    {
      path:'open',
      canActivate:[AuthGuard],     
      component:OpenComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'closed',
      canActivate:[AuthGuard],     
      component:ClosedComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'rejected2',
      canActivate:[AuthGuard],     
      component:RejectedComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'cancelled',
      canActivate:[AuthGuard],     
      component:CancelledComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'all1',
      canActivate:[AuthGuard],     
      component:All1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'open1',
      canActivate:[AuthGuard],     
      component:Open1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'pending1',
      canActivate:[AuthGuard],     
      component:Pending1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'closed1',
      canActivate:[AuthGuard],     
      component:Closed1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'rejected1',
      canActivate:[AuthGuard],     
      component:Rejected1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'cancelled1',
      canActivate:[AuthGuard],     
      component:Cancelled1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'duetoday1',
      canActivate:[AuthGuard],     
      component:Duetoday1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'overdue1',
      canActivate:[AuthGuard],     
      component:Overdue1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'sentforapproval1',
      canActivate:[AuthGuard],     
      component:Sentforapproval1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'toapprove1',
      canActivate:[AuthGuard],     
      component:Toapprove1Component,
      outlet:'thirdchild'
  
    },
    {
      path:'approve2',
      canActivate:[AuthGuard],     
      component:Approve2Component,
      outlet:'thirdchild'
  
    },
    {
      path:'reject2',
      canActivate:[AuthGuard],     
      component:Reject2Component,
      outlet:'thirdchild'
  
    },

    {
      path:'categories',
      canActivate:[AuthGuard],     
      component:CategoriesComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'request_type',
      canActivate:[AuthGuard],     
      component:RequestTypeComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'priority',
       canActivate:[AuthGuard],    
      component:PriorityComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'setting',
      canActivate:[AuthGuard],     
      component:SettingsComponent,
      outlet:'thirdchild'
  
    },
    {
      path: 'mall',
      canActivate: [AuthGuard],
      component: MallComponent,
      outlet:'thirdchild'

    },
    {
      path: 'mopen',
      canActivate: [AuthGuard],
      component: MopenComponent,
      outlet:'thirdchild'

    },
    {
      path: 'mclosed',
      canActivate: [AuthGuard],
      component: MclosedComponent,
      outlet: 'thirdchild'


    },
    {
      path: 'mcancelled',
      canActivate: [AuthGuard],
      component: McancelledComponent,
      outlet: 'thirdchild'

    },
    {
      path: 'moverdue',
      canActivate: [AuthGuard],
      component: MoverdueComponent,
      outlet: 'thirdchild'

    },
    {
      path: 'mdueToday',
      canActivate: [AuthGuard],
      component: MdueTodayComponent,
      outlet: 'thirdchild'

    },
    {
      path: 'mtoapprove',
      canActivate: [AuthGuard],
      component: MtoapproveComponent,
      outlet: 'thirdchild'

    },
    {
      path: 'mapprove',
      canActivate: [AuthGuard],
      component: MapproveComponent,
      outlet: 'thirdchild'

    },
    {
      path: 'mreject',
      canActivate: [AuthGuard],
      component: MrejectComponent,
      outlet: 'thirdchild'

    },
     {
      path:'employee',
       canActivate:[AuthGuard],    
      component:EmployeeComponent,
      outlet:'thirdchild'
      
    },
    {
      path:'create_employee',
      canActivate:[AuthGuard],   
      component:CreateEmployeeComponent,
      outlet:'thirdchild',
      children:[
        {
          path:'official',
          component:OfficialComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
       
        {
        path:'documents',
        component:DocumentsComponent,
        canActivate:[AuthGuard],
        outlet:'fourthchild'
         },
        {
          path:'leave',
          component:LeaveComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'holidays',
          component:HolidaysComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'salary',
          component:SalaryComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'personal',
          component:PersonalComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'contact',
          component:ContactComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'skills',
          component:SkillsComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'jobhistory',
          component:JobhistoryComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'experience',
          component:ExperienceComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'education',
          component:EducationComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'trainingcertification',
          component:TrainingcertificationComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'medicalclaims',
          component:MedicalclaimsComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'disability',
          component:DisabiltyComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'dependency',
          component:DependencyComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'visaandimmigration',
          component:VisaimmigrationComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'corporatecard',
          component:CorporateComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'emp-dependency',
          component:DependencyComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
{
          path:'emp_workeligiblity',
          component:EmpWorkeligibilityComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'additionaldetails',
          component:AdditionalDetailsComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
    
         {
          path:'remuneration',
          component:EmpRemunerationComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
        {
          path:'securitycredentials',
          component:SecurityCredentialsComponent,
          canActivate:[AuthGuard],
          outlet:'fourthchild'
        },
   
         ]
  
    },
     
     {
      path:'holiday_manage',
        canActivate:[AuthGuard],   
      component:HolidayManagementComponent,
      outlet:'thirdchild'
  
    },
     {
      path:'leave_manage',
       canActivate:[AuthGuard],    
      component:LeaveManagementComponent,
      outlet:'thirdchild'
  
    },
     {
      path:'employee_manage',
       canActivate:[AuthGuard],    
      component:EmployeeManagementComponent,
      outlet:'thirdchild'
  
    },
         {
      path:'configuration_bg',
         canActivate:[AuthGuard],  
      component:ConfigurationBgComponent,
      outlet:'thirdchild'
  
    },
     {
      path:'screening_type',
        canActivate:[AuthGuard],   
      component:ScreeningTypeComponent,
      outlet:'thirdchild'
  
    },
         {
      path:'agencies',
         canActivate:[AuthGuard],  
      component:AgenciesComponent,
      outlet:'thirdchild'
  
    },
     {
      path:'screening',
         canActivate:[AuthGuard],  
      component:ScreeningComponent,
      outlet:'thirdchild'
  
    },
         {
      path:'employee_candidate',
         canActivate:[AuthGuard],  
      component:EmployeeCandidateComponent,
      outlet:'thirdchild'
  
    },

         {
      path:'site_preference',
         canActivate:[AuthGuard],  
      component:SitePreferenceComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'identity_codes',
      canActivate:[AuthGuard],   
      component:IdentityCodesComponent,
      outlet:'thirdchild'
    },
     {
      path:'gender',
      canActivate:[AuthGuard],   
      component:GenderComponent,
      outlet:'thirdchild'
    },
    {
      path:'marital',
      canActivate:[AuthGuard],   
      component:MaritalStatusComponent,
      outlet:'thirdchild'
    },
     {
      path:'ethnic-code',
         canActivate:[AuthGuard],  
      component:EthnicCodeComponent,
      outlet:'thirdchild'
  
    },
        {
      path:'countries',
         canActivate:[AuthGuard],  
      component:CountriesComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'states',
         canActivate:[AuthGuard],  
      component:StatesComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'city',
         canActivate:[AuthGuard],  
      component:CitiesComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'geo',
         canActivate:[AuthGuard],  
      component:GeoGroupsComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'number-format',
         canActivate:[AuthGuard],  
      component:NumFormatComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'currencies',
         canActivate:[AuthGuard],  
      component:CurrenciesComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'currency-con',
         canActivate:[AuthGuard],  
      component:CurrencyConversionsComponent,
      outlet:'thirdchild'
  
    },
    {
      path:'time_zone',
      canActivate:[AuthGuard],   
      component:TimeZoneComponent,
      outlet:'thirdchild'
    },
    {
      path:'prefix',
      canActivate:[AuthGuard],   
      component:PrefixesComponent,
      outlet:'thirdchild'
    },
    {
      path:'nationality',
      canActivate:[AuthGuard],   
      component:NationalitiesComponent,
      outlet:'thirdchild'
    },
    {
      path:'license',
      canActivate:[AuthGuard],   
      component:LicenseComponent,
      outlet:'thirdchild'
    },
    {
      path:'ncontext',
      canActivate:[AuthGuard],   
      component:NationalityContextComponent,
      outlet:'thirdchild'
    },
      {
      path:'account',
      canActivate:[AuthGuard],   
      component:AccountClassComponent,
      outlet:'thirdchild'
    },
    {
      path:'email',
      canActivate:[AuthGuard],   
      component:EmailComponent,
      outlet:'thirdchild'
    },
 {
      path:'employee',
      canActivate:[AuthGuard],    
      component:EmployeeComponent,
      outlet:'thirdchild',
     
    },
      {
      path:'role',
      canActivate:[AuthGuard],   
      component:RoleComponent,
      outlet:'thirdchild'
      
    },
    {
      path:'manage_holidaygroup',
      canActivate:[AuthGuard],   
      component:ManageHolidaygroupComponent,
      outlet:'thirdchild'
    },
     {
      path:'manage_holiday',
      canActivate:[AuthGuard],   
      component:ManageHolidayComponent,
      outlet:'thirdchild'
    },
     {
      path:'exit_type',
      canActivate:[AuthGuard],   
      component:ExitTypesComponent,
      outlet:'thirdchild'
    },
    {
      path:'exit_interview',
      canActivate:[AuthGuard],   
      component:ExitInterviewquestionComponent,
      outlet:'thirdchild'
    },
    {
      path:'exit_setting',
      canActivate:[AuthGuard],   
      component:ExitSettingComponent,
      outlet:'thirdchild'
    },
    {
      path:'terminate_retirement',
      canActivate:[AuthGuard],   
      component:TerminateRetirementComponent,
      outlet:'thirdchild'
    },
    {
      path:'initiate_check',
      canActivate:[AuthGuard],   
      component:InitiateCheckstatusComponent,
      outlet:'thirdchild'
    },
    {
      path:'all_exit_procedure',
      canActivate:[AuthGuard],   
      component:AllExitProceduresComponent,
      outlet:'thirdchild'
    },
    

    
    {
      path:'employee_tabs',
      canActivate:[AuthGuard],   
      component:EmployeeTabsComponent,
      outlet:'thirdchild'
    },
    {
      path:'employment_status',
      canActivate:[AuthGuard],   
      component:EmploymentStatusComponent,
      outlet:'thirdchild'
    },
    {
      path:'domain',
      canActivate:[AuthGuard],   
      component:DomainComponent,
      outlet:'thirdchild'
    },
    {
      path:'employment_role',
      canActivate:[AuthGuard],   
      component:EmployeeRoleComponent,
      outlet:'thirdchild'
    },
    {
      path:'pay_frequency',
      canActivate:[AuthGuard],   
      component:PayFrequencyComponent,
      outlet:'thirdchild'
    },
    {
      path:'remuneration',
      canActivate:[AuthGuard],   
      component:RemunerationBasisComponent,
      outlet:'thirdchild'
    },
    {
      path:'job_title',
      canActivate:[AuthGuard],   
      component:JobTitlesComponent,
      outlet:'thirdchild'
    },
    {
      path:'position',
      canActivate:[AuthGuard],   
      component:PositionsComponent,
      outlet:'thirdchild'
    },
    {
      path:'competency_level',
      canActivate:[AuthGuard],   
      component:CompetencyLevelsComponent,
      outlet:'thirdchild'
    },
    {
      path:'education_level',
      canActivate:[AuthGuard],   
      component:EducationLevelsComponent,
      outlet:'thirdchild'
    },
     {
      path:'language',
      canActivate:[AuthGuard],   
      component:LanguagesComponent,
      outlet:'thirdchild'
    },
     {
      path:'leave_types',
      canActivate:[AuthGuard],   
      component:LeaveTypesComponent,
      outlet:'thirdchild'
    },
    {
      path:'attendance',
      canActivate:[AuthGuard],   
      component:AttendanceStatusComponent,
      outlet:'thirdchild'
    },
    {
      path:'bank_account',
      canActivate:[AuthGuard],   
      component:BankAccounttypesComponent,
      outlet:'thirdchild'
    },
    {
      path:'identity',
      canActivate:[AuthGuard],   
      component:IdentityDocumentsComponent,
      outlet:'thirdchild'
    },
     {
      path:'eeoc',
      canActivate:[AuthGuard],   
      component:EEOCCategoriesComponent,
      outlet:'thirdchild'
    },
    {
      path:'work_eligibility',
      canActivate:[AuthGuard],   
      component:WorkEligibilityComponent,
      outlet:'thirdchild'
    },
    {
      path:'veteran',
      canActivate:[AuthGuard],   
      component:VeteranStatusComponent,
      outlet:'thirdchild'
    },
    {
      path:'military_service',
      canActivate:[AuthGuard],   
      component:MilitaryServicetypesComponent,
      outlet:'thirdchild'
    },
    {
      path:'external_users',
      canActivate:[AuthGuard],   
      component:ExternalUsersComponent,
      outlet:'thirdchild'
    },
    {
      path:'vendors',
      canActivate:[AuthGuard],   
      component:VendorsComponent,
      outlet:'thirdchild'
    },
     {
      path:'contact_clients',
      canActivate:[AuthGuard],   
      component:ClientsComponent,
      outlet:'thirdchild'
    },
    {
      path:'contact_projects',
      canActivate:[AuthGuard],   
      component:ContactProjectsComponent,
      outlet:'thirdchild'
    },
    {
      path:'leave_manageoption',
      canActivate:[AuthGuard],   
      component:LeaveMoptionComponent,
      outlet:'thirdchild'
    },
    {
      path:'employee_summary',
      canActivate:[AuthGuard],   
      component:EmpSummaryComponent,
      outlet:'thirdchild'
    },
    {
      path:'add_empleave',
      canActivate:[AuthGuard],   
      component:AddEmpleaveComponent,
      outlet:'thirdchild'
    },
   {
      path:'businessunit',
      canActivate:[AuthGuard],   
      component:BusinessUnitsComponent ,
      outlet:'thirdchild'
    },
    {
      path:'organization-info',
      canActivate:[AuthGuard],   
      component:OrganizationInfoComponent ,
      outlet:'thirdchild'
    },
    {
      path:'departments',
      canActivate:[AuthGuard],   
      component:DepartmentsComponent  ,
      outlet:'thirdchild'
    },
   {
      path:'manage_category',
      canActivate:[AuthGuard],   
      component:ManageCategoriesComponent,
      outlet:'thirdchild'
    },
    {
      path:'announce',
      canActivate:[AuthGuard],   
      component:AnnouncementsComponent,
      outlet:'thirdchild'
    },

    ]
 
    
    }, 
  {
      path:'time',   
      component:TimeComponent,
      canActivate:[AuthGuard], 
      children:[
     
    {
      path:'emp_timesheet',
      canActivate:[AuthGuard],   
      component:EmployeeTimesheetComponent,
      outlet:'timechild',
      children:[
        {
          path:'timesheet',
          component:TimesheetComponent,
          canActivate:[AuthGuard],
          outlet:'timesheetchild'
        }
      ]

    },
    {
      path:'timesheet',
      canActivate:[AuthGuard],   
      component:TimesheetComponent,
      outlet:'timechild'
    },
    {
      path:'client_time',
      canActivate:[AuthGuard],   
      component:ClientTimeComponent,
      outlet:'timechild'
    },
    {
      path:'default-task',
      canActivate:[AuthGuard],   
      component:DefaultTasksComponent,
      outlet:'timechild'
    },
    
    {
      path:'configuration_time',
      canActivate:[AuthGuard],   
      component:ConfigurationTimeComponent,
      outlet:'timechild'
    },
    {
      path:'create-project',
      canActivate:[AuthGuard],   
      component:CreateprojectComponent,
      outlet:'timechild',
      children:[
      {
      path:'project_time',
      canActivate:[AuthGuard],   
      component:ProjectTimeComponent,
      outlet:'projectchild'
    },
     {
      path:'tasks',
      canActivate:[AuthGuard],   
      component:TasksTimeComponent,
      outlet:'projectchild'
    },
     {
      path:'resources',
      canActivate:[AuthGuard],   
      component:ResourcesTimeComponent,
      outlet:'projectchild'
    },
      ]
    },
     {
      path:'projects',   
      canActivate:[AuthGuard], 
      component:ProjectsComponent,
      outlet:'timechild'        
     },
     

     ]

     
    }, 
       
   

]),




 RestangularModule.forRoot(RestangularConfigFactory),
  
  ],
  providers: [UserService,AuthGuard,NotAuthGuard,CountriesComponent,StatesComponent,I18n],  bootstrap: [AppComponent]
})
export class AppModule { }
