(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{643:function(e,a,v){"use strict";v.r(a);var t=v(40),_=Object(t.a)({},(function(){var e=this,a=e.$createElement,v=e._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"一-什么是glance"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是glance"}},[e._v("#")]),e._v(" 一 什么是glance")]),e._v(" "),v("p",[e._v("glance即image service，是为虚拟机的创建提供镜像的服务")]),e._v(" "),v("h2",{attrs:{id:"二-为何要有glance"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二-为何要有glance"}},[e._v("#")]),e._v(" 二 为何要有glance")]),e._v(" "),v("p",[e._v("我们基于openstack是构建基本的Iaas平台对外提供虚拟机，而虚拟机在创建时必须为选择需要安装的操作系统，glance服务就是为该选择提供不同的操作系统镜像。")]),e._v(" "),v("h2",{attrs:{id:"三-glance的功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三-glance的功能"}},[e._v("#")]),e._v(" 三 glance的功能")]),e._v(" "),v("p",[e._v("glance服务使用户能够发现，注册，检索虚拟机的镜像，它提供一个能够查询虚拟机镜像元数据和检索真实镜像的REST API。")]),e._v(" "),v("p",[e._v("具体的：REST API的体现就是一个URI，而在glance中通过一个URI地址来唯一标识一个镜像的形式如下")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("<Glance Server Location>/v1/images/<ID>\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[v("code",[e._v("<Glance Server Location>")]),e._v("：glance服务按照的位置")]),e._v(" "),v("p",[v("code",[e._v("/v1")]),e._v("：使用v1版本，详见四")]),e._v(" "),v("p",[v("code",[e._v("/images")]),e._v("：请求的类型为镜像")]),e._v(" "),v("p",[v("code",[e._v("/<ID>")]),e._v("：一个uuid，在glance中全局唯一")]),e._v(" "),v("h2",{attrs:{id:"四-glance的两个版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四-glance的两个版本"}},[e._v("#")]),e._v(" 四 glance的两个版本")]),e._v(" "),v("p",[e._v("在Newton之前的版本中，glance支持两种REST API V1和V2，两者区别还是很明显的：")]),e._v(" "),v("p",[e._v("（1）. V1只提供了基本的image和member操作功能：镜像创建、删除、下载、列表、详细信息查询、更新，以及镜像tenant成员的创建、删除和列表。")]),e._v(" "),v("p",[e._v("（2）. V2除了支持V1的所有功能外，主要是增加了如下功能：")]),e._v(" "),v("ul",[v("li",[e._v("镜像 location 的添加、删除和修改等操作")]),e._v(" "),v("li",[e._v("metadata  namespace 操作")]),e._v(" "),v("li",[e._v("image tag 操作")])]),e._v(" "),v("p",[e._v("（3）.V1 和V2对 image store 的支持是相同的。")]),e._v(" "),v("p",[e._v("V1版本的实现，具有glance-api和glance-registry两个WSGI服务，二者都提供REST API,但需要强调的一点是：glance-registry提供的REST API是给glance-api使用的，即The registry is a private internal service meant for use by OpenStack Image service. Do not expose this service to users。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/1036857-20170212033927510-251711362.jpg",alt:""}})]),e._v(" "),v("p",[e._v("v2的实现就是将glance-registry集成到了glance-api内部，这么做的好处是减少了一个中间的处理环节")]),e._v(" "),v("p",[v("strong",[e._v("特别需要注意的是")]),v("a",{attrs:{href:"http://docs.openstack.org/developer/glance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://docs.openstack.org/developer/glance/"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("strong",[e._v("在Newton版本中V1已经是过时的了，并且V1最终将被移除。")])]),e._v(" "),v("p",[v("strong",[e._v("v1")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/1036857-20171208150310499-193145793.png",alt:""}})]),e._v(" "),v("p",[e._v("v2")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/1036857-20171208150335359-254506995.png",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"五-镜像的数据存放"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五-镜像的数据存放"}},[e._v("#")]),e._v(" 五 镜像的数据存放")]),e._v(" "),v("p",[e._v("镜像的数据包括：1.镜像元数据；2.镜像本身即chunk")]),e._v(" "),v("p",[e._v("其中镜像的元数据是通过glance-registry保存到数据库中，而镜像的chunk数据是通过Glance store Drivers存放到各种bakcend store中。")]),e._v(" "),v("p",[e._v("为了让大家快速地理解glance，在配置glance时我们使用file作为后端，即将镜像存放于本地文件系统中，上传或者存储镜像的目录位于按照glance服务的机器上（控制节点),默认目录是：/var/lib/glance/images/，我们应该确认该目录有足够的空间可以使用。")]),e._v(" "),v("p",[e._v("需要特别强调的一点是：fileh后端通常位于控制节点本身，因而这种后端并不适用于多节点部署。")]),e._v(" "),v("p",[e._v("在glance服务上周星期的运行很多进程来支持缓存。在做glance集群时要考虑使用复制服务来确保一致性和可用性，其他的周期性的进程包括auditors, updaters, and reapers。")]),e._v(" "),v("h2",{attrs:{id:"六-镜像的访问权限"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六-镜像的访问权限"}},[e._v("#")]),e._v(" 六 镜像的访问权限")]),e._v(" "),v("p",[e._v("参照第七部分Glance Domain Controller之后的Auth服务是用来控制镜像的访问权限的，此处我们需要了解镜像的访问权限都有：")]),e._v(" "),v("ul",[v("li",[e._v("public 公共的：可以被所有的 tenant 使用。")]),e._v(" "),v("li",[e._v("private 私有的/项目的：只能被 image owner 所在的 tenant 使用。")]),e._v(" "),v("li",[e._v("shared 共享的：一个非共有的image 可以 共享给另外的 tenant，可通过member-* 操作来实现。")]),e._v(" "),v("li",[e._v("protected 受保护的：protected 的 image 不能被删除。")])]),e._v(" "),v("h2",{attrs:{id:"七-镜像及任务的各种状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#七-镜像及任务的各种状态"}},[e._v("#")]),e._v(" 七 镜像及任务的各种状态")]),e._v(" "),v("p",[v("strong",[e._v("7.1 镜像的状态：")])]),e._v(" "),v("p",[e._v("下图表示glance在处理镜像时如何从一个状态移动到下一个状态。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/1036857-20170212044151338-1699601554.png",alt:""}})]),e._v(" "),v("p",[e._v("注解：")]),e._v(" "),v("ul",[v("li",[e._v("queued：没有上传 image 数据，只有db 中的元数据。")]),e._v(" "),v("li",[e._v("saving：正在上传 image data，当注册一个镜像使用POST  /images并且当前携带了一个x-image-meta-location头，这个镜像将不会进入saving状态(镜像的数据已经是可以获得的，不能重传)")]),e._v(" "),v("li",[e._v("active：当镜像数据上传完毕，镜像就可以被使用了(可获得的)，此时处于active状态")]),e._v(" "),v("li",[e._v("deactivated：表示任何非管理员用户都无权访问镜像数据，禁止下载镜像，也禁止像镜像导出和镜像克隆之类的操作（请求镜像数据的操作）。")]),e._v(" "),v("li",[e._v("killed：表示上传过程中发生错误，并且镜像是不可读的")]),e._v(" "),v("li",[e._v("deleted:glance已经保存了该镜像的数据，但是该镜像不再可用，处于该状态的镜像将在不久后被自动删除。")]),e._v(" "),v("li",[e._v("pending_delete： 与deleted相似，glance还没有清除镜像数据，只是处于该状态的镜像不可恢复。")])]),e._v(" "),v("p",[e._v("小结：")]),e._v(" "),v("p",[e._v("'queued' => ('saving', 'active', 'deleted')\n'saving' => ('active', 'killed', 'deleted', 'queued')\n'active' => ('queued', 'pending_delete', 'deleted')\n'killed' => ('deleted')\n'pending_delete' => ('deleted')\n'deleted' => ()")]),e._v(" "),v("p",[v("strong",[e._v("7.2 任务的状态")])]),e._v(" "),v("p",[e._v("pending")]),e._v(" "),v("p",[e._v("任务已经保留，但是还没一开始处理")]),e._v(" "),v("p",[e._v("processing")]),e._v(" "),v("p",[e._v("正在执行")]),e._v(" "),v("p",[e._v("success")]),e._v(" "),v("p",[e._v("执行成功")]),e._v(" "),v("p",[e._v("failure")]),e._v(" "),v("p",[e._v("表示在执行任务的过程中发生了错误，并且不能继续执行")]),e._v(" "),v("h2",{attrs:{id:"八-glance包含的组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#八-glance包含的组件"}},[e._v("#")]),e._v(" 八 glance包含的组件")]),e._v(" "),v("p",[e._v("对照第四部分的图示，让我们来详解了解下glance的组件构成")]),e._v(" "),v("p",[v("strong",[e._v("glance-api")]),e._v("\n接受api请求，并提供相应操作，包括发现，检索，存储")]),e._v(" "),v("p",[v("strong",[e._v("glance-registry")]),e._v("\n存储、处理、检索镜像的元数据，元数据包括例如镜像大小、类型等")]),e._v(" "),v("p",[v("strong",[e._v("Database")]),e._v("\n可以选择自己喜欢的数据库存储镜像元数据，大多数使用 MySQL 或则 SQLite.")]),e._v(" "),v("p",[e._v("Storage repository for image files")]),e._v(" "),v("p",[e._v("指的是存储镜像文件的仓库或者称为backend，可以是：")]),e._v(" "),v("ul",[v("li",[e._v("1.本地文件系统（或者任何挂载到glance-api控制节点的文件系统）")]),e._v(" "),v("li",[e._v("2.对象存储Object Storage(swift)")]),e._v(" "),v("li",[e._v("3.块存储RADOS(ceph)")]),e._v(" "),v("li",[e._v("4.VMware数据存储")]),e._v(" "),v("li",[e._v("5.HTTP")])]),e._v(" "),v("p",[v("strong",[e._v("Metadata definition service")])]),e._v(" "),v("ul",[v("li",[e._v("为厂商、管理员、openstack其他服务提供一个公用的API，并且用户可以自定义自己的元数据(有意义的)。")]),e._v(" "),v("li",[e._v("这个元数据功能非常强大,可以被用在不同类型的资源")]),e._v(" "),v("li",[e._v("image 镜像本身")]),e._v(" "),v("li",[e._v("artifacts")]),e._v(" "),v("li",[e._v("volumes 卷")]),e._v(" "),v("li",[e._v("flavors 套餐")]),e._v(" "),v("li",[e._v("aggregates 主机聚合")]),e._v(" "),v("li",[e._v("具体的可以拿主机聚合举例，")]),e._v(" "),v("li",[e._v("主机集合即多台物理主机的集合体，这个集合中的物理主机具有一个或多个硬件方面的优势，比如说内存大，固态磁盘等，专门用来部署数据库服务。")]),e._v(" "),v("li",[e._v("我们可以制作一个镜像，然后在该镜像内定义好元数据：绑定上述的主机结合。这样凡是用到该镜像安装系统的虚拟机，都会被指定到该集合内，然后从该集合内选出一台物理机创建出虚机.")])]),e._v(" "),v("h2",{attrs:{id:"九-glance与openstack其他服务的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#九-glance与openstack其他服务的关系"}},[e._v("#")]),e._v(" 九 glance与openstack其他服务的关系")]),e._v(" "),v("p",[e._v("对glance来说，它的客户端Glance Cli可以是：")]),e._v(" "),v("p",[e._v("1.glance的命令行工具")]),e._v(" "),v("p",[e._v("2.Horizon")]),e._v(" "),v("p",[e._v("3.nova")]),e._v(" "),v("p",[e._v("同keystone一样，glance是Iaas的另外一个中心("),v("code",[e._v("如图")]),e._v("，keystone是关于权限的中心，而glance是关于镜像的中心。glance可以被终端用户或者nova服务访问：接受磁盘或者镜像的API请求和定义镜像元数据的操作。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/1036857-20170210112116276-113690952.png",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"十-glance工作流程详解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十-glance工作流程详解"}},[e._v("#")]),e._v(" 十 glance工作流程详解")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/1036857-20170212040503479-2100726268.png",alt:""}})]),e._v(" "),v("p",[e._v("注解：")]),e._v(" "),v("p",[v("strong",[e._v("A client")])]),e._v(" "),v("p",[e._v("然后使用glance服务的应用程序，可以是命令行工具，horizon，nova等")]),e._v(" "),v("p",[v("strong",[e._v("REST API")])]),e._v(" "),v("p",[e._v("glance是一个client-server架构，提供一个REST API，而使用者就是通过REST API来执行关于镜像的各种操作。")]),e._v(" "),v("p",[v("strong",[e._v("Glance Domain Controller")])]),e._v(" "),v("p",[e._v("是glance内主要的中间件实现，就相当于一调度员，作用是将glance内部服务的操作分发到各层（Auth认证，Notifier，Policy策略，Quota，Location,DB数据库连接）具体任务由每个层实现。")]),e._v(" "),v("ul",[v("li",[e._v("第一层：Auth")])]),e._v(" "),v("p",[e._v("验证镜像自己或者它的属性是否可以被修改，只有管理员和该镜像的拥有者才可以执行该修改操作，否则报错。")]),e._v(" "),v("ul",[v("li",[e._v("第二层：Property protection")])]),e._v(" "),v("p",[e._v("由glance domain controller控制的七层组件")]),e._v(" "),v("p",[e._v("是可选的层，只有在glance的配置文件中设置了property_protection_file参数才会生效，它提供了两种类型的镜像属性：")]),e._v(" "),v("p",[e._v("1.核心属性，是在镜像参数中指定的；2元数据属性，是任意可以被附加到一个镜像上的key/value")]),e._v(" "),v("p",[e._v("该层的功能就是通过调用glance的public API来管理对meta属性的访问，你也可以在它的配置文件中限定这个访问")]),e._v(" "),v("ul",[v("li",[e._v("第三层：Notifier")])]),e._v(" "),v("p",[e._v("把下列信息添加到queue队列中")]),e._v(" "),v("p",[e._v("1.关于所有镜像修改的通知")]),e._v(" "),v("p",[e._v("2.在使用过程中发生的所有的异常和警告")]),e._v(" "),v("ul",[v("li",[e._v("第四层：Policy")])]),e._v(" "),v("p",[e._v("负责：")]),e._v(" "),v("p",[e._v("1.定义操作镜像的访问规则rules，这些规则都定义在/etc/policy.json文件中")]),e._v(" "),v("p",[e._v("2.监控rules的执行")]),e._v(" "),v("ul",[v("li",[e._v("第五层：Quota")])]),e._v(" "),v("p",[e._v("如果针对一个用户，管理员为其规定好他能够上传的所有镜像的大小配额，此处的Quota层就是用来检测用户上传是否超出配额限制：")]),e._v(" "),v("p",[e._v("1.如果没有超出配额限制，那么添加镜像的操作成功")]),e._v(" "),v("p",[e._v("2.如果超出了配额，那么添加镜像的操作失败并且报错。")]),e._v(" "),v("ul",[v("li",[e._v("第六层：Location")])]),e._v(" "),v("p",[e._v("与Glance Store交互，如上传下载等。由于可以有多个存储后端，不同的镜像存放的位置都被该组件管理。")]),e._v(" "),v("p",[e._v("负责：")]),e._v(" "),v("p",[e._v("1.当一个新的镜像位置被添加时，检测该URI是否正确。")]),e._v(" "),v("p",[e._v("2.当一个镜像位置被改变时，负责从存储中删除该镜像。")]),e._v(" "),v("p",[e._v("3.阻止镜像位置的重复")]),e._v(" "),v("ul",[v("li",[e._v("第七层：DB")])]),e._v(" "),v("p",[e._v("1.实现了与数据库API的交互")]),e._v(" "),v("p",[e._v("2.将镜像转换为相应的格式以记录在数据库中。并且从数据库接收的信息转换为可操作的镜像对象。")]),e._v(" "),v("p",[v("strong",[e._v("Registry Layer")])]),e._v(" "),v("p",[e._v("属于可选的层，用来组织安全。")]),e._v(" "),v("p",[e._v("通过使用这个单独的服务，来控制Glance Domain Controller与Glance DB之间的通信。")]),e._v(" "),v("p",[v("strong",[e._v("Glance DB")]),e._v("\nglance服务使用统一一个核心库Glance DB,该库对glance内部所有依赖数据库的组件来说是共享的。")]),e._v(" "),v("p",[v("strong",[e._v("Glance Store")])]),e._v(" "),v("p",[e._v("用来组织处理Glance和各种存储后端的交互。")]),e._v(" "),v("p",[e._v("所有的镜像文件操作都是通过调用Glance Store库执行的，它负责与外部存储端和（或）本地文件系统的交互。Glance Store提供了一个统一的接口来访问后端的存储。")]),e._v(" "),v("h2",{attrs:{id:"十一-disk和container格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十一-disk和container格式"}},[e._v("#")]),e._v(" 十一 Disk和Container格式")]),e._v(" "),v("p",[e._v("当我们添加一个镜像到glance时，你必须指定虚拟机的disk格式和container格式，关于disk格式请自行研究kvm等虚拟。")]),e._v(" "),v("p",[e._v("disk和container格式是每个部署的基本配置，常用的格式如下：")]),e._v(" "),v("p",[e._v("1.Disk Format")]),e._v(" "),v("p",[e._v("不同的虚拟化应用的厂针有不同的虚拟机镜像的disk格式：")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("raw")])]),e._v(" "),v("p",[e._v("This is an unstructured disk image format")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("vhd")])]),e._v(" "),v("p",[e._v("This is the VHD disk format, a common disk format used by virtual machine monitors from VMware, Xen, Microsoft, VirtualBox, and others")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("vhdx")])]),e._v(" "),v("p",[e._v("This is the VHDX disk format, an enhanced version of the vhd format which supports larger disk sizes among other features.")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("vmdk")])]),e._v(" "),v("p",[e._v("Another common disk format supported by many common virtual machine monitors")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("vdi")])]),e._v(" "),v("p",[e._v("A disk format supported by VirtualBox virtual machine monitor and the QEMU emulator")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("iso")])]),e._v(" "),v("p",[e._v("An archive format for the data contents of an optical disc (e.g. CDROM).")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("ploop")])]),e._v(" "),v("p",[e._v("A disk format supported and used by Virtuozzo to run OS Containers")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("qcow2")])]),e._v(" "),v("p",[e._v("A disk format supported by the QEMU emulator that can expand dynamically and supports Copy on Write")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("aki")])]),e._v(" "),v("p",[e._v("This indicates what is stored in Glance is an Amazon kernel image")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("ari")])]),e._v(" "),v("p",[e._v("This indicates what is stored in Glance is an Amazon ramdisk image")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("ami")])]),e._v(" "),v("p",[e._v("This indicates what is stored in Glance is an Amazon machine image")])])]),e._v(" "),v("p",[e._v("2.Container Format")]),e._v(" "),v("p",[e._v("容器container格式是指虚拟机映像是否包含一个文件格式，该文件格式还包含有关实际虚拟机的元数据。")]),e._v(" "),v("p",[e._v("需要注意的是：容器格式字符串在当前并不会被glance或其他OpenStack组件的使用，所以如果你不确定，简单的将容器格式指定bare是安全的。")]),e._v(" "),v("p",[e._v("你可以设置如下容器格式：")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("bare")])]),e._v(" "),v("p",[e._v("This indicates there is no container or metadata envelope for the image")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("ovf")])]),e._v(" "),v("p",[e._v("This is the OVF container format")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("aki")])]),e._v(" "),v("p",[e._v("This indicates what is stored in Glance is an Amazon kernel image")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("ari")])]),e._v(" "),v("p",[e._v("This indicates what is stored in Glance is an Amazon ramdisk image")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("ami")])]),e._v(" "),v("p",[e._v("This indicates what is stored in Glance is an Amazon machine image")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("ova")])]),e._v(" "),v("p",[e._v("This indicates what is stored in Glance is an OVA tar archive file")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("docker")])]),e._v(" "),v("p",[e._v("This indicates what is stored in Glance is a Docker tar archive of the container filesystem")])])]),e._v(" "),v("h2",{attrs:{id:"十二-常见的镜像属性及设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十二-常见的镜像属性及设置"}},[e._v("#")]),e._v(" 十二 常见的镜像属性及设置")]),e._v(" "),v("p",[e._v("当我们向glance中添加一个镜像，我们指定一些常用的镜像属性，这对于使用者来说是非常有用的")]),e._v(" "),v("p",[e._v("在glance中常用镜像属性也被描述成一个JSON参数，可以在glance源码的etc/schema-image.json文件中查看")]),e._v(" "),v("p",[e._v("常用属性如下：")]),e._v(" "),v("p",[v("strong",[e._v("architecture")])]),e._v(" "),v("p",[e._v("操作系统架构，修改方式如下")]),e._v(" "),v("p",[e._v("openstack image set IMG-UUID --property architecture=x86_64")]),e._v(" "),v("p",[v("a",{attrs:{href:"http://docs.openstack.org/cli-reference/glance-property-keys.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://docs.openstack.org/cli-reference/glance-property-keys.html"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("strong",[e._v("instance_uuid")])]),e._v(" "),v("p",[e._v("是元数据，可用于记录与此镜像关联的实例。（仅提供信息，不创建实例快照。）")]),e._v(" "),v("p",[v("strong",[e._v("kernel_id")])]),e._v(" "),v("p",[e._v("The ID of image stored in Glance that should be used as the kernel when booting an AMI-style image.")]),e._v(" "),v("p",[v("strong",[e._v("ramdisk_id")])]),e._v(" "),v("p",[e._v("The ID of image stored in Glance that should be used as the ramdisk when booting an AMI-style image.")]),e._v(" "),v("p",[v("strong",[e._v("os_distro")])]),e._v(" "),v("p",[e._v("操作系统的发行版本")]),e._v(" "),v("p",[v("a",{attrs:{href:"http://docs.openstack.org/cli-reference/glance-property-keys.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://docs.openstack.org/cli-reference/glance-property-keys.html"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("strong",[e._v("os_version")])]),e._v(" "),v("p",[e._v("厂商指定的操作系统版本")]),e._v(" "),v("h2",{attrs:{id:"十三-元数据定义的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十三-元数据定义的概念"}},[e._v("#")]),e._v(" 十三：元数据定义的概念")]),e._v(" "),v("p",[v("a",{attrs:{href:"http://docs.openstack.org/developer/glance/metadefs-concepts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://docs.openstack.org/developer/glance/metadefs-concepts.html"),v("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);