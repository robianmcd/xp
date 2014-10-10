var config = {
    experiences: [
        {
            type: 'professional',
            name: 'Ontario Teachers\' Pension Plan',
            link: 'http://www.otpp.com/',
            startDate: "Aug, 2012",
            media: [
                {
                    type: 'img',
                    url: 'img/otpp/otpp-home.png'
                },
                {
                    type: 'img',
                    url: 'img/otpp/ldap-pe.png'
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
                'AngularJs', 'Wicket', 'Spring', 'Struts', 'Jasmine', 'Grunt', 'Maven', 'Karma', 'Firebase',
                'Jira', 'Confluence', 'Bamboo', 'Stackato', 'Dokku', 'IntelliJ', 'WebStorm', 'Eclipse', 'npm', 'git', 'AD'
            ],
            featuredTags: ['Java', 'JavaScript', 'AngularJs']
        },
        {
            type: 'professional',
            name: 'CAST Software',
            link: 'http://www.cast-soft.com/',
            startDate: "May, 2010",
            endDate: "August, 2011",
            media: [
                {
                    type: 'img',
                    url: 'img/cast/design.jpg'
                },
                {
                    type: 'img',
                    url: 'img/cast/camera-path.jpg'
                },
                {
                    type: 'img',
                    url: 'img/cast/ipad-app.jpg'
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
                'WinForms',
                'VisualStudio', 'DMX', 'Jira'
            ],
            featuredTags: [
                'C++', 'C', 'VisualStudio'
            ]
        },
        {
            type: 'professional',
            name: 'Blu',
            startDate: "Jul, 2009",
            endDate: "Sep, 2009",
            media: [],
            points: [
                'Designed aspects of the project’s architecture',
                'Demonstrated strong initiative in an unsupervised environment',
                'Implemented Naive Bayes classifier for identifying whether a webpage is a blog'
            ],
            tags: [
                'Java',
                'Lucene', 'Solr', 'Nutch', 'MALLET',
                'Eclipse'
            ],
            featuredTags: [
                'Java', 'Lucene', 'Eclipse'
            ]
        },
        {
            type: 'sideProject',
            name: 'Sonder.io',
            link: 'http://beta.sonder.io',
            startDate: "Mar, 2014",
            media: [
                {
                    type: 'img',
                    url: 'img/sonder/location-page.jpg'
                },
                {
                    type: 'img',
                    url: 'img/sonder/librato-dashboard.png'
                },
                {
                    type: 'img',
                    url: 'img/sonder/strider.png'
                }
            ],
            points: [
                'Developed an AngularJS app designed to be extensible and modular',
                'Setup a build and deployment automation system that harnesses: StriderCD, npm, Bower, Gulp, Karma, Jasmine, RSync, SSH, Protractor, Librato, and Slack all at the touch of a button',
                'Gained experience as a system administrator by provisioning continuous delivery and application servers',
                'Efficiently coordinated work with a remote team spread out across North America'
            ],
            tags: [
                'JavaScript', 'HTML', 'CSS',
                'AngularJs', 'Node.js', 'Koa', 'Jasmine', 'Karma', 'Gulp', 'Protractor',
                'WebStorm', 'npm', 'linux', 'Bower', 'collectd', 'Git', 'Digital-Ocean', 'AWS'
            ],
            featuredTags: [
                'JavaScript', 'AngularJs', 'Node.js'
            ]
        },
        {
            type: 'sideProject',
            name: 'MIDI Shape Shifter',
            link: 'https://code.google.com/p/midi-shape-shifter/',
            startDate: "Mar, 2011",
            endDate: "Jul, 2013",
            media: [
                {
                    type: 'img',
                    url: 'img/mss/mss.png'
                },
                {
                    type: 'img',
                    url: 'img/mss/release-1.png'
                },
                {
                    type: 'img',
                    url: 'img/mss/pong.png'
                }
            ],
            points: [
                'Contributed 10000+ lines of code',
                'Enhanced my proficiency in C#',
                'Designed back end architecture and front end GUI from the ground up',
                'Integrated inversion of control framework to make unit testing more feasible'
            ],
            featuredFlags: ['C#', 'WinForms', 'VisualStudio'],
            tags: [
                'C#', 'XML',
                'WinForms', 'NUnit',
                'VisualStudio', 'MIDI', 'Google-Analytics'
            ]
        },
        {
            type: 'sideProject',
            name: 'POSIT',
            link: 'https://play.google.com/store/apps/details?id=org.hfoss.posit.android&hl=en',
            startDate: 'Jan, 2012',
            endDate: 'May, 2012',
            points: [
                'Gained experience working with a distributed version control system',
                'Learned to develop with the Android API'
            ],
            tags: ['Java', 'Android', 'Eclipse']
        },
        {
            type: 'sideProject',
            name: 'Gnumeric',
            link: 'http://www.gnumeric.org/',
            startDate: 'Jan, 2010',
            endDate: 'Apr, 2010',
            points: [
                'Improved leadership skills by collaborating with a team of 8 developers',
                'Worked towards implementing pivot tables in Gnome’s Gnumeric',
                'Designed algorithms and data structures to optimize performance'
            ],
            media: [
                {
                    type: 'img',
                    url: 'img/gnumeric/gnumeric.png'
                }
            ],
            tags: ['C', 'Eclipse', 'GObject']
        },
        {
            type: 'publicSpeaking',
            name: 'AngularJs Toronto',
            link: 'http://www.meetup.com/AngularJS-Toronto/events/168934672/',
            startDate: 'Mar, 2014',
            endDate: 'Mar, 2014',
            media: [
                {
                    type: 'img',
                    url: 'img/angularjs-toronto/meetup-page.png'
                }
            ],
            tags: ['JavaScript', 'AngularJs', 'Firebase']
        },
        {
            type: 'publicSpeaking',
            name: 'Spotlight AngularJs',
            link: 'http://fitc.ca/event/angularjs/presentations/',
            startDate: 'Jun, 2014',
            endDate: 'Jun, 2014',
            media: [
                {
                    type: 'img',
                    url: 'img/spotlight-angularjs/bahen.jpg'
                },
                {
                    type: 'img',
                    url: 'img/spotlight-angularjs/presentations.png'
                }
            ],
            tags: ['JavaScript', 'AngularJs', 'Firebase']
        },
        {
            type: 'publicSpeaking',
            name: 'Web Unleashed',
            link: 'http://fitc.ca/event/webu14/',
            startDate: 'Sep, 2014',
            endDate: 'Sep, 2014',
            media: [
                {
                    type: 'img',
                    url: 'img/web-unleashed/speakers.png'
                },
                {
                    type: 'img',
                    url: 'img/web-unleashed/convention-centre.png'
                },
                {
                    type: 'img',
                    url: 'img/web-unleashed/tweets.png'
                }
            ],
            tags: ['WebStorm', 'Cloud9', 'JavaScript', 'AngularJs']
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
        'C#': {
            type: 'language',
            info: 'C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.'
        },
        XML: {
            type: 'language',
            info: 'Extensible Markup Language (XML) is a flexible structured document format that defines human and machine-readable encoding rules.'
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
        Jasmine: {
            type: 'framework',
            info: 'Jasmine is a behavior-driven development (BDD) for testing JavaScript code. Jasmine has no external dependencies and does not require a DOM.'
        },
        Grunt: {
            type: 'framework',
            info: 'Grunt is a task-based command line build tool for JavaScript projects.'
        },
        Maven: {
            type: 'framework',
            info: 'Apache Maven is a software project management and comprehension tool. This tag is for questions that don\'t relate to a specific Maven version.'
        },
        Karma: {
            type: 'framework',
            info: 'The main goal for Karma is to bring a productive testing environment to developers. An environment, where they don\'t have to set up many things and rather just write the code and get an instant feedback. Because getting a quick feedback is what makes you productive and creative.'
        },
        WinForms: {
            type: 'framework',
            info: 'WinForms is the informal term given to Windows Forms, one of the graphical application programming interface (API) included as a part of Microsoft .NET Framework. WinForms provides access to the native Microsoft Windows interface elements by wrapping the existing Windows API in managed code.'
        },
        Highcharts: {
            type: 'framework',
            info: 'Highcharts is a Javascript charting library that uses HTML, SVG, and VML. The editor offers both open source/nonprofit and commercial editions of the product.'
        },
        Lucene: {
            type: 'framework',
            info: 'The term Lucene refers to the Java fulltext search engine library, but also to the entire eco-system that grew around it, including lucene.net, solr, elasticsearch and zend-search-lucene.'
        },
        Solr: {
            type: 'framework',
            info: 'Apache Solr is an open source search server based on the Lucene Java search library.'
        },
        Nutch: {
            type: 'framework',
            info: 'Nutch is open source web-search software. It builds on Lucene and Solr, adding web-specifics, such as a crawler, a link-graph database, parsers for HTML and other document formats, etc.'
        },
        MALLET: {
            type: 'framework',
            info: 'MALLET is a Java-based package for statistical natural language processing, document classification, clustering, topic modeling, information extraction, and other machine learning applications to text.'
        },
        'Node.js': {
            type: 'framework',
            info: 'Node.js is an event-based, asynchronous I/O framework that uses Google\'s V8 JavaScript engine.'
        },
        Koa: {
            type: 'framework',
            info: 'Koa is a web framework which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.'
        },
        Gulp: {
            type: 'framework',
            info: 'Gulp is a JavaScript build system, node.js-based task runner like Grunt. Gulp\'s uses streams and code-over-configuration for a simpler and more intuitive build process.'
        },
        Protractor: {
            type: 'framework',
            info: 'Protractor is an end to end test framework for Angular applications built on top of webdriverJS. Protractor can be run as a standalone binary runner, or included into your tests as a library.'
        },
        Firebase: {
            type: 'framework',
            info: 'Firebase is a real-time application platform, optimized for building collaborative, asynchronous applications with mostly client-side code.'
        },
        NUnit: {
            type: 'framework',
            info: 'NUnit is an open source unit testing framework for Microsoft .NET and Silverlight written in C#. It serves the same purpose as JUnit does in the Java world, and is one of many in the xUnit family.'
        },
        GObject: {
            type: 'framework',
            info: 'GObject(GLib Object System) provides a portable object system and transparent cross-language interoperability.'
        },


        //Other

        VisualStudio: {
            type: 'other',
            info: 'Visual Studio is an integrated development environment (IDE) from Microsoft. It supports many different programming languages.'
        },
        Jira: {
            type: 'other',
            info: 'JIRA is an enterprise-class issue and project-tracking system.'
        },
        Confluence: {
            type: 'other',
            info: 'Confluence is an enterprise-class collaboration and wiki system.'
        },
        Bamboo: {
            type: 'other',
            info: 'Bamboo is a continuous integration and deployment server from Atlassian, the makers of JIRA, Confluence and Crowd.'
        },
        Stackato: {
            type: 'other',
            info: 'ActiveState Stackato is a commercially supported Platform-as-a-Service based on open source technologies.'
        },
        Dokku: {
            type: 'other',
            info: 'Docker powered mini-Heroku in around 100 lines of Bash.'
        },
        IntelliJ: {
            type: 'other',
            info: 'IntelliJ IDEA is an IDE by JetBrains. Originally created for Java, it currently supports a wide variety of languages, including JavaScript, Groovy, HTML, CSS, RSS, R, Haskell, PHP, Ruby, Python, Scala, Clojure, and Kotlin.'
        },
        WebStorm: {
            type: 'other',
            info: 'WebStorm is a commercial IDE built by JetBrains for editing JavaScript, HTML, and CSS. It is built on the IntelliJ IDEA platform.'
        },
        Eclipse: {
            type: 'other',
            info: 'Eclipse is an open source IDE with plugins available to support a large variety of languages.'
        },
        DMX: {
            type: 'other',
            info: 'DMX512 (Digital MultipleX) is a standard for digital communication networks that are commonly used to control stage lighting and effects.'
        },
        Linux: {
            type: 'other',
            info: 'GNU/Linux, commonly shortened as Linux, is an open source operating system. Use this tag only if your question relates to using Linux APIs or Linux-specific behavior. Questions relating to using or troubleshooting Linux are off topic.'
        },
        Bower: {
            type: 'other',
            info: 'Bower is a package manager for the web. Bower lets you easily install assets such as images, CSS and JavaScript, and manages dependencies for you.'
        },
        collectd: {
            type: 'other',
            info: 'collectd is a daemon which collects system and application performance statistics periodically and provides mechanisms to query and store the values in a variety of ways, for example using RRD files.'
        },
        Git: {
            type: 'other',
            info: 'Git is an open-source distributed version control system (DVCS).'
        },
        AD: {
            type: 'other',
            info: 'Active Directory (AD) is a directory service created by Microsoft. It stores all information and settings for a deployment in a central database. AD allows administrators to assign policies, deploy and update software.'
        },
        MIDI: {
            type: 'other',
            info: 'MIDI (Musical Instrument Digital Interface) is a protocol used to allow music hardware, software and other equipment to communicate with each other.'
        },
        'Google-Analytics': {
            type: 'other',
            info: 'Google Analytics is a free web analytics solution provided by Google, featuring several client-side APIs, as well as REST APIs for data export and for management.'
        },
        Android: {
            type: 'other',
            info: 'Android is Google\'s OS for digital devices [Phone, Tablet, Auto, TV, Watch].'
        },
        'Digital-Ocean': {
            type: 'other',
            info: 'DigitalOcean is a cloud-hosting provider for deploying an SSD cloud server.'
        },
        AWS: {
            type: 'other',
            info: 'Amazon Web Services (AWS) is a collection of commercial services centered around virtualized, commodity and clustered computing, networking, database and storage, as well as supporting tools that are offered through infrastructure as a service.'
        }


        //Heroku, MongoDb, google analytics


    }
};