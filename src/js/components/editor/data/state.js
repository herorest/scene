var state = {
    usertype: 0,
    pagejson: {
        id: 1,
        modifed: false,
        history:[
            {
                "page1":{
                    "font-size":"13px"
                }
            }
        ]
    },
    desktop: {
        page: {
            curr:1,
            prev:2
        },
        data: [
            {
                "type": "text",
                "html": "那年广场",
                "color": "#000",
                "z-index": 1
            }
        ],
        items: 1,
        modifed: false
    },
    template: {
        cate: ['type1', 'type2', 'type3'],
        cateid: 1,
        choseditems: [],
        isFetching: false,
    },
    blockbox:{
        preview:false,
        picture:{
            show:false,
            data:[
                {title:'标题1',src:'images/temple0.jpg'},
                {title:'标题2',src:'images/temple1.jpg'}
            ],
            chose:0
        },
        music:{
            show:false,
            data:[
                {title:'气势磅礴',src:'audio/1.mp3'},
                {title:'激情澎湃',src:'audio/2.mp3'}
            ],
            chose:0
        }
    }
};
