import { defineMock } from 'umi';
import { ELicType, EProductStatus, IImageProduct, IMusicProduct, type IVideoProduct, type Response } from '../src/types';

const videoList: IVideoProduct[] = [
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 20,
    title: '视频素材1视频素材1视频素材1视频素材1视频素材1',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 10000000
  },
  {
    auditStatus: EProductStatus.FAIL,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 25,
    title: '视频素材2',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 2
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 30,
    title: '视频素材3',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 3
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 35,
    title: '视频素材4',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 4
  },
  {
    auditStatus: EProductStatus.FAIL,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 40,
    title: '视频素材5',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 5
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 45,
    title: '视频素材6',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 6
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 50,
    title: '视频素材7',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 7
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 55,
    title: '视频素材8',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 8
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 60,
    title: '视频素材9',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 9
  },
  {
    auditStatus: EProductStatus.FAIL,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 65,
    title: '视频素材10',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 10
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 70,
    title: '视频素材11',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 11
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 75,
    title: '视频素材12',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 12
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 80,
    title: '视频素材13',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 13
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 85,
    title: '视频素材14',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 14
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 90,
    title: '视频素材15',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 15
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 95,
    title: '视频素材16',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 16
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 100,
    title: '视频素材17',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 17
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 105,
    title: '视频素材18',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 18
  },
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 110,
    title: '视频素材19',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 19
  },
  {
    auditStatus: EProductStatus.FAIL,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 115,
    title: '视频素材20',
    licType: ELicType.LP,
    softwareType: 'v',
    vid: 20
  }
];
const imageList: IImageProduct[] = [
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 20,
    title: 'image1',
    licType: ELicType.LP,
    softwareType: 'v',
    fid: 17777777
  },
  {
    auditStatus: EProductStatus.FAIL,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 20,
    title: 'image1',
    licType: ELicType.LP,
    softwareType: 'v',
    fid: 27777777
  }
];
const musicList: IMusicProduct[] = [
  {
    auditStatus: EProductStatus.SUCCESS,
    coverImage: 'https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/txsczq05.png',
    price: 20,
    title: 'music1',
    licType: ELicType.LP,
    softwareType: 'v',
    mid: 19999999
  }
];
const buyVideoList: { licTypes: ELicType[], vid: number }[] = [
  { licTypes: [ELicType.LP], vid: 2 },
  { licTypes: [ELicType.LP], vid: 3 },
  { licTypes: [ELicType.LP], vid: 4 },
]
const buyImageList: { licTypes: ELicType[], fid: number }[] = [
  { licTypes: [ELicType.LP], fid: 27777777 }
]
const buyMusicList: { licTypes: ELicType[], mid: number }[] = []

export default defineMock({
  // 获取视频购物车
  'GET /vjh/buyer/cart/videos': (_, res) => {
    const cartData: Response<IVideoProduct[]> = {
      code: 200,
      data: videoList,
      message: 'success'
    };
    res.send(cartData);
  },
  // 获取图片购物车
  'GET /vjh/buyer/cart/fotos': (_, res) => {
    const cartData: Response<IImageProduct[]> = {
      code: 200,
      data: imageList,
      message: 'success'
    };
    res.send(cartData);
  },
  // 获取音乐购物车
  'GET /vjm/cart/music/musics': (_, res) => {
    const cartData: Response<IMusicProduct[]> = {
      code: 200,
      data: musicList,
      message: 'success'
    };
    res.send(cartData);
  },
  // 获取视频购买历史
  'GET /vjh/video/download/lic-types-bought': (req, res) => {
    const vids = req.query.vids as string[];
    const cartData: Response<{ licTypes: ELicType[]; vid: number; }[]> = {
      code: 200,
      data: buyVideoList,
      message: 'success'
    };
    res.send(cartData);
  },

  // 获取图片是否买过
  'GET /vjf/foto/download/lic-types-bought': (req, res) => {
    const fids = req.query.fids as string[];
    const cartData: Response<{ licTypes: ELicType[]; fid: number; }[]> = {
      code: 200,
      data: buyImageList,
      message: 'success'
    };
    res.send(cartData);
  },

  // 获取音乐是否买过
  'GET /vjm/music/download/lic-types-bought': (req, res) => {
    const mids = req.query.mids as string[];
    const cartData: Response<{ licTypes: ELicType[]; mid: number; }[]> = {
      code: 200,
      data: buyMusicList,
      message: 'success'
    };
    res.send(cartData);
  }
});