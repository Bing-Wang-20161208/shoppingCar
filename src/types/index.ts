
/** 产品类型 */
export enum EProductType {
  /** 视频 */
  VIDEO = 'VIDEO',
  /** 图片 */
  IMAGE = 'IMAGE',
  /** 音乐 */
  MUSIC = 'MUSIC',
}

/** 产品状态 */
export enum EProductStatus {
  /** 上架 */
  SUCCESS = 'SUCCESS',
  /** 下架 */
  FAIL = 'FAIL',
}

/** 授权类型 */
export enum ELicType {
  /** 个人授权 */
  NP = 'NP',
  /** 企业授权 */
  LP = 'LP',
  /** 企业PLUS */
  LPPLUS = 'LPPLUS',
}

/** 购物车数据类型 */
export interface IBaseProduct {
  /** 分别代表上架下架​ */
  auditStatus: EProductStatus
  /** 封面图​ */
  coverImage: string
  /** 个人授权价格​ */
  price: number
  /** 最终价格：企业授权=price*4,企业plus授权=price*10 */
  totalPrice: number
  /** 素材标题​ */
  title: string
  /** 授权类型 */
  licType: ELicType
  /** 类型​ */
  softwareType?: string
  /** 用于选择购物车 */
  checked?: boolean
  /** 判断是否可选择购物车：是否已经购买过 */
  disabled?: boolean
  /** 已购买过 */
  isBuy?: boolean
}

/** 获取视频购物车 */
export interface IVideoProduct extends IBaseProduct {
  vid?: number
}

/** 获取图片购物车 */
export interface IImageProduct extends IBaseProduct {
  fid?: number
}

/** 获取音乐购物车 */
export interface IMusicProduct extends IBaseProduct {
  mid?: number
}

/**购买历史公共 */
export interface IBuyHistoryBase {
  /** 授权类型 */
  licTypes: ELicType[]
}
/** 购买历史视频 */
export interface IBuyHistoryVideo extends IBuyHistoryBase {
  vid?: number
}

/** 购买历史图片 */
export interface IBuyHistoryImage extends IBuyHistoryBase {
  fid?: number
}

/** 购买历史音乐 */
export interface IBuyHistoryMusic extends IBuyHistoryBase {
  mid?: number
}

// 响应类型
export interface Response<T> {
  code: number;
  data: T;
  message: string;
}