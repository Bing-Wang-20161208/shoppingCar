/vjh/buyer/cart/videos 获取视频购物车
{​
    method: 'get',​
    path: '/vjh/buyer/cart/videos',​
    alias: 'getBuyerCartVideos'，​
    response: {​
        data: {​
            auditStatus: 'SUCCESS' | 'FAIL' // 分别代表上架下架​
            coverImage: string // 封面图​
            price: number // 个人授权价格​
            softwareType: '视频素材' | 'AE模板' | 'C4D模版' // 类型​
            title: string // 素材标题​
            licType: 'NP' | 'LP' | 'LPPLUS' // 加入购物车时选的授权类型：“个人授权” ｜ “企业授权” ｜ “企业PLUS” ​
            vid: number // 素材唯一id​
        }[]​
   }​
}

/vjf/buyer/cart/fotos 获取图片购物车
{​
    method: 'get',​
    path: '/vjh/buyer/cart/fotos',​
    alias: 'getBuyerCartFotos'，​
    response: {​
        data: {​
            auditStatus: 'SUCCESS' | 'FAIL' // 分别代表上架下架​
            coverImage: string // 封面图​
            price: number // 个人授权价格​
            softwareType: '图片素材' | 'AI模板' | 'PSD模版' // 类型​
            title: string // 素材标题​
            licType: 'NP' | 'LP' | 'LPPLUS' // 加入购物车时选的授权类型：“个人授权” ｜ “企业授权” ｜ “企业PLUS” ​
            fid: number // 素材唯一id​
        }[]​
   }​
}

/vjm/cart/music/musics 获取音乐购物车​
{​
    method: 'get',​
    path: '/vjm/cart/music/musics',​
    alias: 'getBuyerCartMusics'，​
    response: {​
        data: {​
            auditStatus: 'SUCCESS' | 'FAIL' // 分别代表上架下架​
            coverImage: string // 封面图​
            price: number // 个人授权价格​
            title: string // 素材标题​
            licType: 'NP' | 'LP' | 'LPPLUS' // 加入购物车时选的授权类型：“个人授权” ｜ “企业授权” ｜ “企业PLUS” ​
            mid: number // 素材唯一id​
        }[]​
   }​
}

/vjh/video/download/lic-types-bought 获取视频购买历史
{​
    method: 'get',​
    path: '/vjh/video/download/lic-types-bought',​
    alias: 'getVideoDownloadLicTypesBought'，​
    parameters: {​
        vids: number[]​
    },​
    response: {​
        data: {​
            licTypes: 'NP' | 'LP' | 'LPPLUS'[] // 历史购买授权类型​
            vid: number​
        }[] // 出现在该数组中的一定是买过的，没买过的不会返回，如果都没买过有可能为空数组[]​
   }​
}​
​
请求示例：/vjh/video/download/lic-types-bought?vids=1&vids=2&vids=3&vids=4

/vjf/foto/download/lic-types-bought 获取图片是否买过
{​
    method: 'get',​
    path: '/vjh/foto/download/lic-types-bought',​
    alias: 'getFotoDownloadLicTypesBought'，​
    parameters: {​
        fids: number[]​
    },​
    response: {​
        data: {​
            licTypes: 'NP' | 'LP' | 'LPPLUS'[] // 历史购买授权类型​
            fid: number​
        }[] // 出现在该数组中的一定是买过的，没买过的不会返回，如果都没买过有可能为空数组[]​
   }​
}

/vjm/music/download/lic-types-bought 获取音乐是否买过
{​
    method: 'get',​
    path: '/vjh/music/download/lic-types-bought',​
    alias: 'getMusicDownloadLicTypesBought'，​
    parameters: {​
        mids: number[]​
    },​
    response: {​
        data: {​
            licTypes: 'NP' | 'LP' | 'LPPLUS'[] // 历史购买授权类型​
            mid: number​
        }[] // 出现在该数组中的一定是买过的，没买过的不会返回，如果都没买过有可能为空数组[]​
   }​
}