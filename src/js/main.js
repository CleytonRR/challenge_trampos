import Api from './api'

class App {
    constructor() {
        this.jobs = []
        this.colors = ['#99FFA6', '#FF2478', '#7D629C', '#E061FF']
        this.listJobs = document.getElementById("listJobs")
        this.loader = document.createElement('div')
        this.loadPage()
    }

    loadPage() {
        window.onload = this.getJobs()
    }

    async getJobs() {
        this.loader.className = 'spinner'
        this.listJobs.appendChild(this.loader)
        try {
            const response = await Api.getJobs()
            this.jobs = response
            this.render()
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        this.listJobs.removeChild(this.loader)
        this.jobs.forEach(item => {

            let title = document.createElement('h5')
            title.innerText = item.opportunity.name
    
            let company = document.createElement('span')
            company.innerText = item.opportunity.company_name
    
            let listItem = document.createElement('li')
            listItem.style.borderLeft = `8px ${this.colors[Math.floor(Math.random() * 4)]} solid`
            listItem.appendChild(title)
            listItem.appendChild(company)
    
            let linkEl = document.createElement('a')
            linkEl.setAttribute('href', item.opportunity.permalink)
            linkEl.setAttribute('target', '_blank')
    
    
            linkEl.appendChild(listItem)
            this.listJobs.appendChild(linkEl)
        })


    }
}

new App