/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d62abec650eb25fae1cce49960ad067c"],["/about/index.html","0792be977b6a7f90921a3068c79d1a03"],["/anzhiyu/random.js","9d941c579fa8b21a4b648e19a67c93c4"],["/archives/2023/10/index.html","dacc3d8badfab6e41a1095956dc649dd"],["/archives/2023/11/index.html","b637ca9652fca90e4ac823b6fc6a64e1"],["/archives/2023/12/index.html","09a1b6c514adb629ed910f30fc36d443"],["/archives/2023/index.html","060d87dae971a2c72a4191c870f7a677"],["/archives/2023/page/2/index.html","79b79da541e99c638918bb81b39a5c66"],["/archives/2024/01/index.html","773d4d66dc92a9646d364f55434cc200"],["/archives/2024/index.html","bdc8910ecc040721fdef670b87d761d6"],["/archives/index.html","02dc35934264cbfcb4898e952be37a9e"],["/archives/page/2/index.html","7396109da40355def5a47671282d1425"],["/baidu_verify_codeva-vcKVtmLEJf.html","0692a4f1276e8ee5db87b05cb945362d"],["/categories/Java/index.html","e99a0709704e484bddaafe1f50ae1847"],["/categories/Java/消息队列/index.html","bed50cebbee15c19027e6cd46b4ee476"],["/categories/Java/消息队列/后端开发/index.html","27a3250ac9fe5d91a039799de55a7fc7"],["/categories/index.html","5541f0c3c08744b9dab98338ac250642"],["/categories/loadbalance/index.html","d71740c7a0e1d781f461efc477bf8779"],["/categories/loadbalance/源码分析/Springcloud/index.html","86ba017fc00be74d66f2573160a75181"],["/categories/loadbalance/源码分析/index.html","c70f7736a8f2ca0148761aca87d4e0dc"],["/categories/后端开发/Java/Spring-boot/index.html","a12b58b0d7db5bac55da2dae3410e3a4"],["/categories/后端开发/Java/Spring/Spring-boot/index.html","cbede11a6285de603688afdb660ce238"],["/categories/后端开发/Java/Spring/index.html","10ec1a4813c4dd2040bb2c472d965454"],["/categories/后端开发/Java/SpringMvc/index.html","422701d101af8a07021bd04fd72c5790"],["/categories/后端开发/Java/Springcloud/index.html","2ad0041ccc58ac65a83787b97b1d1b7b"],["/categories/后端开发/Java/index.html","d457aadd3ff63104eac68246cd28d6dc"],["/categories/后端开发/index.html","06621f6e05fcacae9bce067352119b76"],["/categories/后端开发/数据库/index.html","37a51926ebcd34413307169a6aad2d64"],["/categories/负载均衡/index.html","4cf5d027b00c3a681452acde5a3a4c25"],["/css/custom.css","0967f567087d4ffb8fd4ca7d11fe3169"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","bee0a0e949b42e58fd5d1b7e13028309"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1.png","ec99322efdd4ca4da6d623c95fe15c7d"],["/images/10.png","5146c986872b7036a8d340d2709ce708"],["/images/11.png","c5f1a6ad621adabfe136a0066ef6ed84"],["/images/12.png","5d02daa99a366fc70d939ffcfacfce5c"],["/images/13.png","da7a8a1e68ec33af5374521d27f92957"],["/images/14.png","343ba19fcf7ccd9e3b53323e727f9fe9"],["/images/15.png","50ac8815e180d6ee6cccbaeefff0bbe6"],["/images/16.png","23ca518a493a5ead1a80c2712d9f787e"],["/images/17.png","c1f65c6f465f38e4b6bdc7b921964832"],["/images/18.png","d62dc6adebae87c1e8ef429df0e493f6"],["/images/19.png","b0b34c98c3d34a7a67a750db413c8ca5"],["/images/2.png","5f7d3f069e72b398381e5a2cffdd0886"],["/images/3.png","e29ebd44e34c8906cab17305392e2cd5"],["/images/4.png","bcf71a5007e3da9efe8ec549f84a95c5"],["/images/5.png","9bb8839da8ef4de63daa430e957f240f"],["/images/6.png","3f8deab19db571e9cdd8554e9952b7b9"],["/images/7.png","3ea20e9b46a14c03949563cc63deea96"],["/images/8.png","05637fdf90f941d16e78656e724614e7"],["/images/9.png","835ec15553eb834b932f0834b5f32906"],["/images/RabbitMQ/image-20231226202616352.png","d4b111a195c03083727de41183886f76"],["/images/RabbitMQ/image-20231226203358984.png","b40bcc61d6204c69bd2a2cd33d67baf4"],["/images/RabbitMQ/image-20231226203429342.png","6aa6224da8f1d948caafa61e9213d66e"],["/images/RabbitMQ/image-20231226203929187.png","1be656b214dd04cd20e4c73b291a39b6"],["/images/RabbitMQ/image-20231226204053537.png","afef040ceb9af760a4cb2e6e0f2b68e4"],["/images/RabbitMQ/image-20231226204406763.png","05a267ec628b3ed0383a964b0752a318"],["/images/RabbitMQ/image-20231226205325183.png","27db0cc31cd1bc659be49623b131dcb9"],["/images/RabbitMQ/image-20231226210403311.png","e13d464eaa09e74ac40ea73584663e57"],["/images/RabbitMQ/image-20231226213311532.png","170201860aa9192be40d8bf9cdbd4a96"],["/images/RabbitMQ/image-20231227145007665.png","86327b8199632de47e1ef227b591fb2a"],["/images/RabbitMQ/image-20231227145202439.png","162dc24e3ce02a551bbcfaddd695503d"],["/images/RabbitMQ/image-20231227150006304.png","1efa93d095d49cc0ef64cfca7fa8ee68"],["/images/RabbitMQ/image-20231227150743930.png","965196f77d2fb2a7dff88870f63c9896"],["/images/RabbitMQ/image-20231227151449282.png","d204dd6e429013fa7d96224ac494c0a2"],["/images/RabbitMQ/image-20231227153614081.png","343568b32ca7be7c632da75b9399115d"],["/images/RabbitMQ/image-20231227154340798.png","40b7aba18cbd3689e072e80b570fe0d6"],["/images/RabbitMQ/image-20231227155132715.png","7ae624740faa3f2d5c6b44f5b7a791b1"],["/images/RabbitMQ/image-20231227155600972.png","1205412cbe6be115492ce184de8f9edb"],["/images/RabbitMQ/image-20231227160701291.png","61988b85dc9bb93d4ad30e2a24ace91b"],["/images/RabbitMQ/image-20231227164439701.png","f4e56d4010553a46e7e3e83b371ef16d"],["/images/RabbitMQ/image-20231227165246426.png","a2b41352d73fcba0ff49be3b7b4ecb6c"],["/images/RabbitMQ/image-20231227165332889.png","7b56ddd07df9a9a91bb7bee3b0ee3cca"],["/images/RabbitMQ/image-20231227170415147.png","6f02e34a968788f33ea031152f85d640"],["/images/RabbitMQ/image-20240116174123496.png","84de1925d1bd6d3fb21e9047e29d682f"],["/images/RabbitMQ/image-20240116182642863.png","3386c9e72d7b92b397ac621f27962064"],["/images/RabbitMQ/image-20240118184814999.png","a94eed84a57c92b4ca2e331e509aace9"],["/images/RabbitMQ/image-20240118185722405.png","cafc8d5a6095258aceb6436a42a6d86d"],["/images/RabbitMQ/image-20240118190224124.png","8bd73ddb101ec20b200fff04d6daac15"],["/images/RabbitMQ/image-20240118194140429.png","9fd58ec0bb3b9fa6974830863ba925fc"],["/images/RabbitMQ/image-20240118204937030.png","73c9184aa1e7de9803036a16723d34ca"],["/images/RabbitMQ/image-20240118225218632.png","e2b4f685fefb90cf464f34635451aa1f"],["/images/RabbitMQ/image-20240118231449883.png","99da5b6d85bb9ea1d577554437c77752"],["/images/RabbitMQ/image-20240119183845036.png","67651249fcc84635b98d0e32cfb39c1c"],["/images/RabbitMQ/image-20240119191524675.png","00898ced0ae9cca84f6a83965bfc3e32"],["/images/RabbitMQ/image-20240119192042845.png","76dd6f4f1fd1b0c01c592e86871ce0c5"],["/images/RabbitMQ/image-20240119193457988.png","027d3dd23738ab69d954d809562d92b2"],["/images/RabbitMQ/image-20240119195329596.png","57f55b00c1e819630545607d5980490c"],["/images/RabbitMQ/image-20240119200131745.png","89f3e7581695ec895c18c646b76d6630"],["/images/RabbitMQ/image-20240119204433271.png","7625ac38ae90192e5bf7f2a1855b9279"],["/images/RabbitMQ/image-20240119204451321.png","0710e0705d30b4cebf74c3b385f85d8b"],["/images/RabbitMQ/image-20240119211532487.png","4f1350130c81c681680dcf990a81b2cb"],["/images/RabbitMQ/image-20240119215427663.png","fa1ceb92b087a684e68454c9f32b56a4"],["/images/Spring-boot-Test/1.png","915c0dff784b20de16d674dff9db7446"],["/images/Spring-boot-Test/2.png","171fb2fdef5f8031e4c72bc2fc49781c"],["/images/Spring-boot-Test/3.png","815936f9318759e306fbda1890580602"],["/images/Spring-boot-Test/image-20231022192728262.png","63a5c94e6b038c53905247494236b200"],["/images/Spring-boot-Test/image-20231022192825970.png","37a1ce3e0448a8e2927b65ae0a7c226a"],["/images/Spring-boot-Test/image-20231022193028202.png","35779b313278f6efe62109d0cfdf8ce4"],["/images/Spring-boot-Test/image-20231022193958003.png","044ef35b6b8258fd1d9bb592fe61de96"],["/images/Spring-boot-Test/image-20231022194429117.png","40d59b4b632d5e00724f1a4be90de649"],["/images/Spring-boot-Test/image-20231022195054720.png","e2a7ef9b426cfadd6d5bb133f02ab5e8"],["/images/Spring-boot-starter/1.png","ba8e4ac95d22e61345ed49d14b9d6d26"],["/images/Spring-boot-starter/10.png","6e4ad152f2499e81c6278c5a1234b796"],["/images/Spring-boot-starter/11.png","e33da7edd3a99fe1c4293d5987c06e98"],["/images/Spring-boot-starter/2.png","2e07604cccb9326e61be1c48110c2cac"],["/images/Spring-boot-starter/3.png","f37aba167ec94eae86e92da27e86ae88"],["/images/Spring-boot-starter/4.png","5845a3676f415b4c94a813cc684c0d18"],["/images/Spring-boot-starter/5.png","727819ca150998922d0ff0db0367c343"],["/images/Spring-boot-starter/6.png","838c8dfbadd5825df4c9286d82f063a4"],["/images/Spring-boot-starter/7.png","6e47c789b039601c878de1a938be7ee3"],["/images/Spring-boot-starter/8.png","431bcf2eb904239ec533b7773979d69c"],["/images/Spring-boot-starter/9.png","5b1b4bd504d32b1cecaf683fac513a71"],["/images/Spring-boot整合Mybatis-Plus/1.png","46a4177963bf956d22a942c5868bb21a"],["/images/Spring-boot整合Mybatis-Plus/2.png","22a53ae9cb08c6f6a8c58b84344d1bcf"],["/images/Spring-boot整合Mybatis-Plus/3.png","1093765008ba80212a727037f58ae837"],["/images/Spring-boot整合Mybatis-Plus/4.png","d752975214e02f253dc6867b9fc053d3"],["/images/Spring-boot整合Mybatis-Plus/5.png","67cab2afb25e80bdd13d2873ccb8bd79"],["/images/Spring-boot整合Mybatis-Plus/6.png","ef0eedfc02c14f0ca547f6a12c20284e"],["/images/Spring5/1.jpg","c7d94fabd9e1251acb3bba73458e3813"],["/images/Spring5/10.jpg","b86d2522c39e0670be28032f11789853"],["/images/Spring5/11.jpg","c0d39517cb10ae6b19bacbd635958542"],["/images/Spring5/12.jpg","3cede6bc8a14d268a7987b0bca0ff719"],["/images/Spring5/13.jpg","05c797267d13b293c069046c37e8e883"],["/images/Spring5/14.jpg","b1cec5c975445ba7aa3caaea68cc31eb"],["/images/Spring5/15.jpg","0dcfa505cbffc202f18ba6791eeb4ec2"],["/images/Spring5/16.jpg","ae6c567b89861cc5c4f6b75aa0bb0cc5"],["/images/Spring5/17.jpg","f1bd65a04e3fb98968246061f3882083"],["/images/Spring5/18.jpg","89f94fceaf01aeab098058b8e25515e5"],["/images/Spring5/19.jpg","d1cbaec3f049d9abf4b2ad278b3eadf1"],["/images/Spring5/2.jpg","b229b064564117596e6af9be73407750"],["/images/Spring5/20.jpg","640e1788c6479a0d6462499b6cd406ce"],["/images/Spring5/21.jpg","51449e524ae5a3770418cbb2f9332ff6"],["/images/Spring5/22.jpg","d66b9b595051369455de125946bf3a2e"],["/images/Spring5/23.jpg","e9bdb1d8f9e5f78b9c20b66369e2c542"],["/images/Spring5/24.jpg","28f813dc34e50b917c09af720f9559c0"],["/images/Spring5/25.jpg","406cd05767ca029d7b0c3dc6bd3c7c99"],["/images/Spring5/26.jpg","b8a25cdfd7484dc902a84e3d0231ec0b"],["/images/Spring5/27.jpg","8962149031f283453a2f160e33a680a0"],["/images/Spring5/3.jpg","7b653b3923261968687a7482626c597d"],["/images/Spring5/4.jpg","b391b29f53a9d98f7aac834baf24f3dc"],["/images/Spring5/5.jpg","b2e6eec9ec2189f63dd545137caa28ad"],["/images/Spring5/6.jpg","6b92bb32788fac1f5b2aeee6e8069382"],["/images/Spring5/7.jpg","d32d4ee8e1e9e5319155952a0a008dd8"],["/images/Spring5/8.jpg","bacc73f908568a76ced79e9023bb13dc"],["/images/Spring5/9.jpg","7bf2051a7ead7b2cf864d00f469c5d37"],["/images/docker/image-20231110210529369.png","b68503429ec67bb014b92d7f7e26d9ef"],["/images/docker/image-20231110212126867.png","0ad10bf2eccc6864cbf4f11db6732d89"],["/images/docker/image-20231110212202034.png","0ad10bf2eccc6864cbf4f11db6732d89"],["/images/docker/image-20231110222710432.png","3ee3fe07d57858c319c773567806bfac"],["/images/docker/image-20231111192921261.png","c5ba29f3510d23738581c1658ec5bdd1"],["/images/docker/image-20231111193449518.png","5c4b4dac27933a1f676a990b8941991c"],["/images/docker/image-20231111203700014.png","fe1973a8ac19cc7394cb2e8a385e7098"],["/images/docker/image-20231111203723540.png","815d899e8b035c4a6fc183a3ab864251"],["/images/docker/image-20231111204233349.png","402b74159f631819ed88d99a31ebca19"],["/images/docker/image-20231111210312987.png","7f1921529dd0d0ce7bd5816b202e0063"],["/images/docker/image-20231111210843538.png","2c0c6becb80b69e38db669aec1b5c6c7"],["/images/docker/image-20231111211110968.png","bd5e31ccefe3a5dce4b0e427b6189752"],["/images/docker/image-20231111212419050.png","796d1c00a1a9755ff51402376bdb1f4b"],["/images/docker/image-20231111212640875.png","ff0c491c16275f785a92b889c3a7bbaf"],["/images/docker/image-20231112184413309.png","e5124d5b485424617a38753e043467c7"],["/images/docker/image-20231112190149969.png","3c51c63655755e8994db461d90c8f644"],["/images/docker/image-20231112190500943.png","2d252223865e98fe8392e32c30bd74c8"],["/images/docker/image-20231112191917200.png","fbafd27b4f3d9373724dbd2d092f163b"],["/images/docker/image-20231112192407829.png","6622348f237f88f5b334fdc02c7a97e9"],["/images/docker/image-20231112195906364.png","e0b51c9afef91a5fbf0a73e9c010e765"],["/images/docker/image-20231112200206610.png","97a0ab046f45bb7502680b5a4bc2e5f8"],["/images/docker/image-20231112200342619.png","a2dd3481639397d4e35b75cb112fda1c"],["/images/docker/image-20231112200532629.png","8e309daccc8b0fb107c1dd65252943fa"],["/images/docker/image-20231112200717454.png","bdb777075da6a036e8e2df431238547f"],["/images/docker/image-20231112202227342.png","b8874c1737d84c88fcd37703c21eca2f"],["/images/docker/image-20231112202416998.png","04cd4815566fefc39bf57f7abd2d59fe"],["/images/docker/image-20231112202916361.png","dca0d57de03fbd53eff37ea647bee81e"],["/images/loadbalancer/image-20231124225645413.png","5fba4443c84234baf610d2bbb8dc8fb8"],["/images/loadbalancer/image-20231124225955852.png","c7efc1355d20b6c17de2f6b5654882fa"],["/images/loadbalancer/image-20231124230335383.png","6d9d22f7d34336959457e09151567fbd"],["/images/loadbalancer/image-20231124232617203.png","a5c29ca6ba97c40703bd4363e98e2315"],["/images/loadbalancer/image-20231125143553749.png","c005722aeeecbf695a80623d34c0a5a8"],["/images/redis/image-20240122155222749.png","8854492a8aa5ca3aeb03f319e03a2020"],["/images/redis/image-20240122163329122.png","179c96807dbb09dd968b16ab5463d638"],["/images/redis/image-20240122175035508.png","ce9ad0c4b09086e60137f573269db12e"],["/images/redis/image-20240122180139682.png","7f9118c245ee03fb87edca89519e8fe1"],["/images/redis/image-20240122212305379.png","6bc8f8ed2b1acd450a784d46c69d1ca8"],["/images/redis/image-20240122220452338.png","c36cc53d82e2f63f65dd24808d2a276d"],["/images/redis/image-20240127174239563.png","ba34743a3f82d8cc143108990366480c"],["/images/redis/image-20240128215316586.png","1f24a855fc90f2f88b514b762ebc55e6"],["/images/redis/image-20240129205418274.png","b9905eac1efd6104fcbe2e0a8f457cb8"],["/images/redis/image-20240129214414273.png","47b485a84fa4f2495733a82a51b25992"],["/images/redis/image-20240129224414874.png","499e88e0e069eb27f06b8721496918e8"],["/images/redis/image-20240129224917048.png","bd270a70b6a9b3dab3da7aa727cd614b"],["/images/redis/image-20240129231307849.png","7309264f78dad9e547f83f58dac5e842"],["/images/springCloud/image-20231116225828579.png","7ce6d72fe26a891afc0f5b300d197d15"],["/images/springCloud/image-20231116231152480.png","4f6152276494ff3cc0376511155532e1"],["/images/springCloud/image-20231117193137836.png","b6fedddd853972a09f0a26d95fd193e4"],["/images/springCloud/image-20231117212737222.png","aa124c74e5ded750aee0a3e79d5df91b"],["/images/springCloud/image-20231117221644728.png","1503d26386006351fb7fb44f6dd81e35"],["/images/springCloud/image-20231117223124177.png","4229b91a4e34e82f5ddc3284dcb8567b"],["/images/springCloud/image-20231117223241076.png","13e55bc08b239ebb80c828b0b6bba09a"],["/images/springCloud/image-20231117230303166.png","dee999e1ec2fd2b6e5170c7cee1aaeb8"],["/images/springCloud/image-20231118170433327.png","8862a7980058c868e945659542b2f45e"],["/images/springCloud/image-20231118171332891.png","5e0d69927caef8dae558c1fb62e863c7"],["/images/springCloud/image-20231121200151730.png","df380166dc065642db69ffcb1b3f5dc5"],["/images/springCloud/image-20231121203501545-17007430712031.png","25eaefa268595d15117d6e3c96dc3564"],["/images/springCloud/image-20231123205706183.png","549690418b9350369d4895b277fd43be"],["/images/springCloud/image-20231123205813238.png","bfce2db329324c906ddc64d58d207594"],["/images/springCloud/image-20231125164540037.png","f1fe4c29449ce08b3002da70ce8b3d52"],["/images/springCloud/image-20231125164646214.png","f89b123462f09a8990df3c7bc1411e5b"],["/images/springCloud/image-20231129194610051.png","4620c2ea323268afd653e224bcd84001"],["/images/springCloud/image-20231129194853663.png","28b5ec2c87b38fee7f76e20ed066ba4e"],["/images/springCloud/image-20231129194940926.png","ab9cbc46cfae22b99e25f97ce8ff33e5"],["/images/springCloud/image-20231130205107477.png","0532b1131fa2fb0af482cf61cd107bf6"],["/images/springCloud/image-20231130210706501.png","2ba21c0cfec25bea315a4e10b0dfce0b"],["/images/springCloud/image-20231130223308841.png","c0c96ee5a1b9fb7308c1a310a628b902"],["/images/springCloud/image-20231201224733842.png","b29472b774a6b17a66323dbe59978d78"],["/images/springCloud/image-20231201224950077.png","9dbd6ae2d00c9f0bc18b4f2194882812"],["/images/springCloud/image-20231201225537390.png","0fc31fdd56430fef043a49bb3e8a69c6"],["/images/springCloud/image-20231201225606101.png","44348302c854c34f92ac9362ebfb1aa5"],["/images/springCloud/image-20231202.png","e37a1099b3bc0c968f7f94b1a8d65089"],["/images/springCloud/image-20231202161641793.png","a4b73d19ff6083439c58bbaa489c8a21"],["/images/springCloud/image-20231202163155241.png","51d264d91ef98cf33fb59f9a1937ee37"],["/images/springCloud/image-20231202201119475.png","e3a48fb67069280d810c107ffc4db700"],["/images/springCloud/image-20231202201850170.png","3d3d304ed5c20bab340c2105ac3ae79e"],["/images/springCloud/image-20231202202254382.png","6f8fe9580a69c1160a7eae74bd152b21"],["/images/springCloud/image-20231203154939411.png","45edb0884dcd1d27fc99958e4261ed14"],["/images/springCloud/image-20231203155316866.png","bd3adbf1322c62e805d16bc558053ddd"],["/images/springCloud/image-20231203155606541.png","6c17411d00bc078607b0e2fc41f1aae1"],["/images/springCloud/image-20231203163936125.png","4769adcaeef857e0887f1ab83b31f638"],["/images/springCloud/image-20231203170233206.png","d050079a09286946ae6dbb8036a0c46c"],["/images/springCloud/image-20231203171832069.png","fa1bc0d4a805b095719afdce4a76b197"],["/images/springCloud/image-20231203172129877.png","04b3ec6548c3e85c37d103766d6ce057"],["/images/springCloud/image-20231203172608134.png","eef494c1dd371480caa3b8f3b0bdc1a5"],["/images/springCloud/image-20231203190515005.png","c431f1c3e14060387c9f949379218ebc"],["/images/springCloud/image-20231203191105888.png","bb0bf21f0209fb61e729e14ba1908607"],["/images/springCloud/image-20231203194723074.png","4ec435451c811946c5f47557c00c15a0"],["/images/springCloud/image-20231203194839467.png","0b738f36e8f056a3db0071c31503bb62"],["/images/springCloud/image-20231203195606296.png","ed54e597b57276b899900e8fa4a748eb"],["/images/springCloud/image-20231203203344545.png","89e6b0f022dc1de7a539c6a2903cc388"],["/images/springCloud/image-20231203205414189.png","9c21617cdf3ba31fcaa6ffa569689ce0"],["/images/springCloud/image-20231203210318167.png","c0b7720214da7b5175c913f108182f32"],["/images/springCloud/image-20231203210448947.png","d79221a6e1e6972352e3ca706ffc3018"],["/images/springCloud/image-20231203211320245.png","d62baa9e001d834911b74133d065b8d0"],["/images/springCloud/image-20231203211606029.png","ba32aa3c114f9c7b05be102d78b78262"],["/images/springCloud/image-20231203213020226.png","d78fa815b596df44434cd98fb5d7c137"],["/images/springCloud/image-20231203221046317.png","a3faf3cd21f294b254d3b68b5e0ac79b"],["/images/springCloud/image-20231212162546077.png","fe34420f4d2d0b741efa8f99561bb868"],["/images/springCloud/image-20231212163009077.png","69240ceb2ce9ffe0920f0543e4600fbf"],["/images/springCloud/image-20231212170352212.png","af6d1fd5bf83b59b5df8820ab1e3ad9d"],["/images/springCloud/image-20231212202750700.png","2217f78234fbac16668f6675e9b30f2a"],["/images/springCloud/sentinel-hot-param-overview-1.png","4c8333562f1eac421197102aa1cf2a2c"],["/images/设计模式/image-20231218154425225.png","b089e3c09008d9118b2d24b08097d878"],["/images/负载均衡/2019-06-08-081503.jpg","b0b2bf392aea3838510bf735b91d34d0"],["/images/负载均衡/2019-06-08-081527.jpg","f1ea05505ec1b8cce0b537564068cce8"],["/images/负载均衡/2019-06-08-081555.jpg","de4be24476ce8ec259340855cda06f3c"],["/images/负载均衡/2019-06-08-081630.jpg","7f28cad80062a6159555854249ad77e3"],["/images/负载均衡/2019-06-08-081654.jpg","834df5b644c5cfba8af3dbec1ee6ce4b"],["/images/负载均衡/2019-06-08-081721.jpg","d52c5102c7e333c6293b50491243a5c9"],["/images/负载均衡/2019-06-08-084141.jpg","b4d9876ee10b266de7c898901d9f121c"],["/images/负载均衡/2019-06-08-084206.jpg","97213c2c90c3ca6a3bb27df4c78c0212"],["/images/负载均衡/2019-06-08-084311.jpg","b3f42411e5ef382384cef0f085645eb9"],["/images/负载均衡/2019-06-08-084341.jpg","793593e1d5fe5f442e5ace3030a247bc"],["/images/负载均衡/2019-06-08-084405.jpg","3a185a0337ba3e1e80bbeb371c3ea860"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/MySQL.png","08e9a2902bc3a161aa5cfd519bbfa747"],["/img/Redis.png","364a7fc3b29ec533b2028e255a28d02e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","afabe5e1237b9f87c79fb67347ce0bb6"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/emoji_line (66).png","d6bcd1714f0cb71814e4725b8c0cdbca"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/prefixdoc.png","bd60b46d850a1c2c61b41958192b7131"],["/img/rabbitmq.png","d8c1359edd13a29615fe44247313faaa"],["/img/siteicon/128.png","4fbec11a260542ad4e1c7788c45f8a2c"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/256.png","58ebd05cf37a456b201386a2fb31c4fc"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/48.png","c009ddbce7b82cd21c95024554124df9"],["/img/siteicon/64.png","2e14d420713f9cb4f54e0ac9968748ed"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/github.png","e45ec88bd50ddedc1d38c69e260950cb"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/spring.png","a4e115f7ee42e268f8d5db97efbc8d34"],["/img/touxiang.jpg","28a545a18c4ffbe97382d4404774f52f"],["/img/wechat.jpg","10eecfb030e3a4adeea9745480634106"],["/img/地图1.png","bdb3f7fb05d0e0e44f20aab4e658f0e5"],["/img/地图2.png","e0164a6c99da97126bc4e4a6bad7fbd4"],["/img/音乐背景.png","64b03f6f7e787734ce3d196948076692"],["/index.html","ab0bb21e5b364e5b23304eec1ebead0f"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","53aaa1f5e7f59ab1acdf7621f98a48c0"],["/js/main.js","0a25defe2cf66b045ed8876fc4707172"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","cfa47a86f9ae79d6d2ba165d33fdd9d0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","03a534a077756ce204c8711d5f33f712"],["/page/2/index.html","fdabc0fab41ab3e31c6baeb42560c5f3"],["/posts/6b4fa34.html","cce0d5b674b51c48a00a733f9a476ec5"],["/posts/6c92115f.html","22f68c766691140fc2a0890e9de2a7c6"],["/posts/6f2612a2.html","4b0219f1998a1ec45eae6f71531e1d99"],["/posts/96a41905.html","fa3e657f37be8d0f97163ee28bd49944"],["/posts/ae0f95e0.html","e7436ad79e6b364c71774048770e0c23"],["/posts/b543ced0.html","31d7ade0e22c532b6f7fff5b847fc363"],["/posts/bae4ff13.html","b45e87d45c5384e7db6e10d80f993d8b"],["/posts/c4de6804.html","1f56125ebb7994a9bc32167a582ba5a5"],["/posts/c9acdb25.html","afc3d328ce2e5c09da4b1af58ec25e5f"],["/posts/e79634ee.html","1e1597f198674f212ab98b0583b5132f"],["/posts/e8d530fd.html","812556e55cb2d74c5fb9a3faf9ef49fa"],["/posts/f255ffad.html","aa122632484ec2e1488b13b6d4a715e3"],["/posts/undefined.html","2c5434ed241ba52a78d0f4b01ccbe0d3"],["/sw-register.js","9c89a2fd728bf16b658a3cba69750703"],["/tags/Redis/index.html","38bf9abe0a1d705b89b95b60fe019a2e"],["/tags/Spring-boot/index.html","1b8bb97f8f8ac8cdc7c7eaca9a33eb5c"],["/tags/SpringCloud/index.html","071ef8b95789f8c744cc7648dcd05226"],["/tags/SpringMVC/index.html","41a5528794054a409a0faba47cd4e6c3"],["/tags/docker/index.html","b87dadc0aebbbe6616f55420aad09d4c"],["/tags/index.html","54adad0c999008d9e1e00c5c3c07a32e"],["/tags/spring/index.html","a5c2a45f3964a65d5c957aaf99c831f4"],["/tags/消息队列/index.html","0078be0c9ecc3b7e78c4e22c17a2b378"],["/tags/源码分析/index.html","0262296354d44d197b16dce3fd3e83c4"],["/tags/负载均衡/index.html","871e4548a53845526973223e21c2de62"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
