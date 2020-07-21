/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */

 class Page{
    constructor(baseUrl){
        this.baseUrl=baseUrl
    }
    open(){
        return `Open my instance ${this.baseUrl}${this.path}`
    }
    reload(){
        return `page ${this.baseUrl}${this.path} was reaload`
    }




}
class DashboardPage extends Page{
    constructor(baseUrl, path,courseNumber,courseList){
        super(baseUrl)
        this.path= path;
        this.courseNumber=0;
        this.courseList=courseList;
    }
    get search(){
        return new PageBlock('Search')
    }

    typeRequestForSearch(text){
        return `User try to find ${text}`
    }

    get searchButton(){
        return `search button`;
    }
    set listOfCourse(string){
        this.courseList= string;
    }
    enrollmentNumber(number){
        return this.courseNumber+number;

    }

}
const dashboardPage = new DashboardPage('https://elearn.epam.com/','/dashboard');
console.log(dashboardPage);
console.log(dashboardPage.open());
console.log(dashboardPage.reload());
console.log(dashboardPage.typeRequestForSearch('ZANKO'));
console.log(dashboardPage.enrollmentNumber(10));
console.log(dashboardPage.listOfCourse='JS для начинающих, JS для чайников');