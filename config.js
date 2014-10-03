var config = {
    experiences: [
        {
            type: 'professional',
            name: 'Ontario Teachers\' Pension Plan',
            startDate: "Aug, 2012",
            media: [
                {
                    type: 'img',
                    url: 'img/sample-screenshot.png'
                },
                {
                    type: 'img',
                    url: 'img/sample-screenshot2.png'
                },
                {
                    type: 'img',
                    url: 'img/tweets.png'
                },
                {
                    type: 'img',
                    url: 'img/Speakers.png'
                }
            ],
            points: [
                'Introduced new products and best practices that improved efficiency and helped the team meet its business objectives',
                'Gained additional experience with Java, JavaScript, HTML, and CSS',
                'Collaborated with coworkers through code reviews to produce high quality code',
                'Learned to work efficiently with tools like Eclipse, IntelliJ, Git, Maven, and Spring',
                'Improved public speaking skills by presenting at developer meetings and in-house conferences'
            ],
            tags: [
                'Java', 'JavaScript', 'HTML', 'CSS', 'SASS',
                'AngularJs', 'Wicket', 'Spring', 'Jasmine', 'Grunt', 'Maven', 'Karma',
                'Jira', 'Confluence', 'Bamboo', 'Stackato', 'Dokku', 'IntelliJ', 'WebStorm', 'Eclipse'
            ],
            featuredTags: ['Java', 'JavaScript', 'AngularJs']
        },
        {
            type: 'professional',
            name: 'CAST Software',
            startDate: "May, 2010",
            endDate: "August, 2011",
            media: [
                {
                    type: 'img',
                    url: 'img/sample-screenshot2.png'
                },
                {
                    type: 'img',
                    url: 'img/tweets.png'
                },
                {
                    type: 'img',
                    url: 'img/Speakers.png'
                }
            ],
            points: [
                'Implemented a wide variety of projects including: a spreadsheet engine for automatically generating reports, a multi-threaded driver for real-time streaming of ArtNet, and new welcome screens for the company’s applications',
                'Improved communication skills by working alongside other software developers, product managers, and the quality assurance department',
                'Responsible for collaborating with other software companies regarding compatibility issues',
                'Expanded knowledge of the software industry by working through several full release cycles'
            ],
            tags: [
                'C++', 'C',
                'winforms',
                'VisualStudio'
            ],
            featuredTags: [
                'C++', 'C', 'VisualStudio'
            ]
        }
    ],
    tagDefs: {
        //LANGUAGES
        Java: {
            type: 'language',
            info: 'Java is a general-purpose programming language designed to be used in conjunction with the Java Virtual Machine (JVM). "Java platform" is the name for a computing system that has installed tools for developing and running Java programs.'
        },
        JavaScript: {
            type: 'language',
            info: 'JavaScript is a dynamically-typed language commonly used for client-side scripting.'
        },
        HTML: {
            type: 'language',
            info: 'HTML (HyperText Markup Language) is the principal markup language used for structuring web pages and formatting content. The most recent revision to the HTML specification is HTML5.'
        },
        CSS: {
            type: 'language',
            info: 'CSS (Cascading Style Sheets) is a language used to control the visual presentation of HTML and XML documents including (but not limited to) colors, layout, and fonts.'
        },
        SASS: {
            type: 'language',
            info: 'Sass (Syntactically Awesome Stylesheets) is an extension of CSS adding features like nested rules, variables and mixins. This extends the possibility to write structured, manageable and reusable CSS. Sass translates to standard CSS.'
        },
        'C++': {
            type: 'language',
            info: 'C++ is a general-purpose programming language based on C. Use this tag for questions about code compiled with a C++ compiler, regardless of whether the code could be valid in C, C#, Objective-C and other C based programming languages.'
        },
        C: {
            type: 'language',
            info: 'C is a general-purpose computer programming language used for operating systems, libraries, games and other high performance work and is clearly distinct from C++. It was developed in 1972 by Dennis Ritchie for use with the Unix operating system.'
        },


        //FRAMEWORKS

        AngularJs: {
            type: 'framework',
            info: 'AngularJS is an open-source JavaScript framework. Its goal is to augment browser-based applications with Model–View–Whatever(MV*) capability and reduce the amount of JavaScript needed to make web applications functional. These types of apps are also frequently known as Single-Page Applications.'
        },
        Wicket: {
            type: 'framework',
            info: 'Apache Wicket, commonly referred to as Wicket, is a lightweight component-based web application framework for the Java programming language conceptually similar to JavaServer Faces and Tapestry.'
        },
        Spring: {
            type: 'framework',
            info: 'The Spring Framework is an open source framework for application development on the Java platform. At its core is rich support for component based architectures, and it currently has over a dozen highly integrated modules.'
        },
        Struts: {
            type: 'framework',
            info: 'The Apache Struts web framework is a free open-source solution for creating Java web applications. This framework has reached End Of Life status as of 2013-04-05.'
        },
        WinForms: {
            type: 'framework',
            info: 'WinForms is the informal term given to Windows Forms, one of the graphical application programming interface (API) included as a part of Microsoft .NET Framework. WinForms provides access to the native Microsoft Windows interface elements by wrapping the existing Windows API in managed code.'
        },


        //Libraries

        Highcharts: {
            type: 'library',
            info: 'Highcharts is a Javascript charting library that uses HTML, SVG, and VML. The editor offers both open source/nonprofit and commercial editions of the product.'
        },


        //Other

        VisualStudio: {
            type: 'other',
            info: 'Visual Studio is an integrated development environment (IDE) from Microsoft. It supports many different programming languages.'
        }

        //AD, FireBase, Heroku, MongoDb, IntelliJ, DB, linux, windows, google analytics
        //Tools, Services, DBsweb

        //Languages, Library/Framework, Other


    }
};