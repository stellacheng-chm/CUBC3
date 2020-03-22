/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {
  sails.bcrypt = require('bcryptjs');
  const saltRounds = 10;

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  if (await Book.count() > 0) {
    return;
  }

  await Book.createEach([
    {
      bookname: "這世界很煩，但你要很可愛 (2)", ISBN: "9789578683761", location: "A架15行", category: "心理勵志",
      author: "萬特特", year: "2020", publisher: "幸福文化",
      photo: "https://www.books.com.tw/img/001/084/50/0010845024.jpg"
    },

    {
      bookname: "這世界很煩，但你要很可愛 (1)", ISBN: "9789578683761", location: "A架15行", category: "心理勵志",
      author: "萬特特", year: "2020", publisher: "幸福文化",
      photo: "https://www.books.com.tw/img/001/084/50/0010845024.jpg"
    },

    {
      bookname: "想見你 (2)", ISBN: "9789869811750", location: "B架11行", category: "小說",
      author: "三鳳製作", year: "2020", publisher: "水靈文創",
      photo: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/084/01/0010840192.jpg&v=5dc55fd1&w=250&h=250"
    },

    {
      bookname: "想見你 (1)", ISBN: "9789869811750", location: "B架11行", category: "小說",
      author: "三鳳製作", year: "2020", publisher: "水靈文創",
      photo: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/084/01/0010840192.jpg&v=5dc55fd1&w=250&h=250"
    },

    {
      bookname: "曼巴精神", ISBN: "9789573284192", location: "B架24行", category: "自傳",
      author: "Kobe Bryant", year: "2019", publisher: "遠流",
      photo: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/081/41/0010814172.jpg&v=5c63ffbb&w=250&h=250"
    },

  ]);

  if (await Game.count() > 0) {
    return;
  }

  await Game.createEach([
    {gamename:"飛行棋", category:"棋類遊戲", location:"C架5行", serialno:"001", publisher:"A出版社",
     photo:"https://cdn.shopify.com/s/files/1/0051/3566/3192/products/BG1A8122_2048x.JPG?v=1562934046"
    },

    {gamename:"矮人礦坑", category:"卡牌遊戲", location:"C架5行", serialno:"002", publisher:"B出版社",
     photo:"https://dvblobcdnjp.azureedge.net//Content/Upload/ThemeImages/2014-11/78bce2fd-3fd2-474e-b75b-18b412ea01df.jpg"
    },

    {gamename:"富饒之城", category:"卡牌遊戲", location:"C架5行", serialno:"002", publisher:"C出版社",
     photo:"https://dvblobcdnjp.azureedge.net//Content/Upload/ThemeImages/2014-11/8a4a93d6-ab21-46b5-87b5-05adb40aad6a.jpg"
    },

    {gamename:"妙語說書人", category:"卡牌遊戲", location:"C架5行", serialno:"002", publisher:"D出版社",
     photo:"https://dvblobcdnjp.azureedge.net//Content/Upload/ThemeImages/2014-11/ec7b5d59-b7be-4cce-9af7-94588cfce80a.jpg"
    },

    {gamename:"卡坦島", category:"卡牌遊戲", location:"C架5行", serialno:"002", publisher:"E出版社",
     photo:"https://dvblobcdnjp.azureedge.net//Content/Upload/ThemeImages/2014-11/59dc2ab4-fe77-47ff-878b-3f36d8207a44.jpg"
    },


  ])

  if(Gift.count>0)
  {
    return;
  }

  await Gift.createEach([
      {giftname:"原子筆", amount:"10", donator:"A先生", category:"小型禮物",location:"C架11行", value:"4",
      photo:"https://s.yimg.com/zp/MerchandiseImages/801A1EA020-SP-7138139.jpg"},

      {giftname:"卡坦島桌遊", amount:"5", donator:"B先生", category:"中型禮物",location:"C架11行", value:"150",
      photo:"https://dvblobcdnjp.azureedge.net//Content/Upload/ThemeImages/2014-11/59dc2ab4-fe77-47ff-878b-3f36d8207a44.jpg"},

      {giftname:"妙語說書人桌遊", amount:"7", donator:"B先生", category:"中型禮物",location:"C架11行", value:"150",
      photo:"https://dvblobcdnjp.azureedge.net//Content/Upload/ThemeImages/2014-11/ec7b5d59-b7be-4cce-9af7-94588cfce80a.jpg"},

      {giftname:"IPAD", amount:"1", donator:"C小姐", category:"大型禮物",location:"C架11行", value:"3000",
      photo:"https://buy4u.hk/image/catalog/product%20gallery/gadget/apple/ipad%20mini%202019/ipad_mini_2019_2.jpg"},


  ])





  const hash = await sails.bcrypt.hash('123456', saltRounds);

  if (await User.count() > 0) {
    return;
  }

  await User.createEach([
    { username: "admin", password: hash, role: "admin", email:"admin@gmail.com", department:"部門A", position:"職位A" },
    { username: "oscar", password: hash, role: "user", email:"oscar@gmail.com", department:"部門B", position:"職位B"  },
    { username: "stella", password: hash, role: "user",email:"stella@gmail.com", department:"部門B", position:"職位B"  },
    { username: "jay", password: hash, role: "user",email:"jay@gmail.com", department:"部門C", position:"職位C"  },
    { username: "fung", password: hash, role: "user",email:"fung@gmail.com", department:"部門C", position:"職位C"  },
    { username: "jeremy", password: hash, role: "user",email:"jeremy@gmail.com", department:"部門C", position:"職位C"  },
    // etc.
  ]);

  if (await Material.count() > 0) {
    return;
  }

  await Material.createEach([
    {materialname:"原子筆", amount:"10", category:"文具", location:"C架11行",  photo:"https://s.yimg.com/zp/MerchandiseImages/801A1EA020-SP-7138139.jpg"},

    {materialname:"IPAD", amount:"1", category:"電子產品",location:"C架11行",
    photo:"https://buy4u.hk/image/catalog/product%20gallery/gadget/apple/ipad%20mini%202019/ipad_mini_2019_2.jpg"},


])


}

