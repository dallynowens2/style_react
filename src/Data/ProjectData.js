const ProjectData = [
    {
        id: 1,
        projectName: "Build-A-Word",
        projectLanguage: "Kotlin",
        projectDescription: "A simple mobile game where you try to put together as many words as possible",
        projectDescriptionFull: "This is a mobile game I built using kotlin. I built it in android stuidios. The basis for the game is you are trying to build words from given random letters. Each word has to be over 2 letters long and be a valid word in the dicrionary",
        photoPath: "./photos/buildAWord.png",
        blogPosts:['build-a-word', 'binary-search']
    },
    {
        id: 2,
        projectName: "Nielsen Contracting API",
        projectLanguage: "C# -.Net",
        projectDescription: "An Api for the mobile app to have crud operations on employee hours and other things",
        projectDescriptionFull: "An API for the mobile app Nielsen Contracting. This is used to access the database and preform crud operations on employees, and Jobs. It has authentication form Auth0 to ensure only users logged in can make calls for create update and delete",
        photoPath: "./photos/TimeClock.png",
        blogPosts:['efc']
    },
    {
        id: 3,
        projectName: "Nielsen Contracting",
        projectLanguage: "C# -Xamarin",
        projectDescription: "An application that is used to keep track of hours on a job for employees",
        projectDescriptionFull: "This application is the front end for users to view employee information, clock in at jobs or view jobs. This project is using Auth0 to allow the user to log in so that they can authenticate to preform certain actions.",
        photoPath: "./photos/TimeClock.png",
        blogPosts:['testing-time-clock']
    },
    {
        id: 4,
        projectName: "Art Store",
        projectLanguage: "JavaScript + HTML/CSS",
        projectDescription: "A website that would be used to sell a persons art.",
        projectDescriptionFull: "This is a sampel art store made from HTML/CSS and a little bit of java script as well. It shows products in a mobile responsive way so that the columns resize depending on the screen size.",
        photoPath: "./photos/ArtStore.PNG",
        blogPosts:['art-store']
    },
    {
        id: 5,
        projectName: "AWS",
        projectLanguage: "Cloud Computing",
        projectDescription: "A entry into AWS and cloud computing.",
        projectDescriptionFull: "This is a log of different things I have learned on my path of trying to get my cloud practitioner certificate for AWS",
        photoPath: "./photos/AWS.PNG",
        blogPosts:['aws-basic']
    }
]

export default ProjectData;