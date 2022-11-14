const express = require('express')
const blogApi = express.Router()
// const models = require('./models')

const POSTS = [
    {
        title: "Giá xăng lên sát 24.000 đồng một lít",
        slug: "gia-xang-len-sat-24-000-dong-mot-lit-4534823",
        summary: "Ngoại trừ dầu diesel giảm 90 đồng, các mặt hàng khác đều tăng giá, trong đó, xăng đắt thêm 840-1.110 đồng một lít.  37",
        content: `Ngoại trừ dầu diesel giảm 90 đồng, các mặt hàng khác đều tăng giá, trong đó, xăng đắt thêm 840-1.110 đồng một lít.

        Theo điều chỉnh của liên Bộ Công Thương - Tài chính, từ 15h chiều nay, giá RON 95-III tăng lên 23.860 đồng một lít; E5 RON 92 là 22.710 đồng một lít.
        
        Nhân viên một cửa hàng trên đường Phan Xích Long, quận Phú Nhuận, TP HCM bơm xăng dầu cho khách, ngày 1/11. Ảnh: Thành Lộc
        
        Nhân viên một cửa hàng trên đường Phan Xích Long, quận Phú Nhuận, TP HCM bơm xăng dầu cho khách, ngày 1/11. Ảnh: Thành Lộc
        
        Các mặt hàng dầu cũng tăng, trừ dầu diesel giảm 90 đồng về còn 24.980 đồng một lít. Dầu hoả có mức giá mới là 24.740 đồng một lít; dầu mazut là 14.760 đồng một kg.
        
        đồng/lít
        Diễn biến giá xăng, dầu từ đầu năm đến nay
        RON 95-III
        Diesel
        11-1-2022
        21/1/2022
        11-2-2022
        21/2/2022
        1-3-2022
        11-3-2022
        21/3/2022
        1-4-2022
        12-4-2022
        21/4/2022
        4-5-2022
        11-5-2022
        23/5/2022
        1-6-2022
        13/6/2022
        21/6/2022
        1-7-2022
        11-7-2022
        21/7/2022
        1-8-2022
        11-8-2022
        22/8/2022
        5-9-2022
        12-9-2022
        21/9/2022
        3-10-2022
        11-10
        21/10
        1-11
        11-11
        15k
        20k
        25k
        30k
        35k
        VnExpress
        Cùng với điều chỉnh giá, nhà điều hành cũng trích lập mỗi lít xăng RON 95 -III và E5 RON 92 là 200 đồng một lít; dầu mazut là 300 đồng một lít. Dầu hoả và diesel không trích lập vào quỹ ở kỳ điều hành hôm nay. Mức chi quỹ về 0 đồng một lít với các mặt hàng xăng, dầu.
        
        Tại kỳ điều hành hôm nay, chi phí đưa xăng dầu từ nước ngoài về Việt Nam trong giá cơ sở đã được cập nhật, với mức tăng 160-660 đồng một lít tuỳ loại. Theo Bộ Tài chính, việc tăng chi phí này làm tăng giá cơ sở xăng E5 RON 92 và dầu diesel dưới 50 đồng một lít; xăng RON 95 gần 150 đồng mỗi lít và dầu hỏa trên 720 đồng một lít.
        
        Sau thời gian tạm ổn định, hơn một tuần qua, tại Hà Nội, TP HCM vẫn ghi nhận tình trạng cây xăng treo biển hết xăng, bán cầm chừng.
        
        Ghi nhận của VnExpress trưa 11/11, vài giờ trước khi giá xăng dầu được điều chỉnh, các cây xăng tại Hà Nội vẫn trong tình trạng hàng dài người xếp hàng chờ tới lượt đổ xăng. Nhiều người cho biết họ phải chờ gần nửa tiếng mới tới lượt hoặc phải đi vài km mới đổ được nhiên liệu. Một số cây xăng của doanh nghiệp tư nhân thông báo "tạm hết hàng".`
    },
    {
        title: "Cán bộ hải quan bảo kê xăng lậu: Tôi đã đánh mất tất cả",
        slug: "can-bo-hai-quan-bao-ke-xang-lau-toi-da-danh-mat-tat-ca-4534753",
        summary: `Bị cáo Ngô Văn Thụy, cựu cán bộ hải quan, thừa nhận sai khi nhận hơn 800 triệu đồng của "trùm" đường dây buôn lậu 200 triệu lít xăng, xin tòa xem xét.  20`
        ,content: `Bị cáo Ngô Văn Thụy, cựu cán bộ hải quan, thừa nhận sai khi nhận hơn 800 triệu đồng của "trùm" đường dây buôn lậu 200 triệu lít xăng, xin tòa xem xét.

        Ngày 11/11, phiên xử đại án buôn lậu 200 triệu lít xăng tiếp tục với phần thẩm vấn bị cáo Ngô Văn Thụy (58 tuổi, cựu cán bộ Cục Điều tra chống buôn lậu, Tổng cục Hải quan) về tội Nhận hối lộ theo khoản 3 Điều 354 Bộ luật Hình sự, khung hình phạt 15-20 năm tù.
        
        Ông Thụy bị cáo buộc đầu năm 2021 - khi là Đội Trưởng kiểm soát chống buôn lậu khu vực miền Nam (Đội 3, phụ trách khu vực từ Bình Thuận trở vào) đã nhận 800 triệu đồng của 2 đại gia buôn lậu xăng Phan Thanh Hữu (65 tuổi, Giám đốc Công ty TNHH TM Phan Lê Hoàng Anh) và Nguyễn Hữu Tứ, 65 tuổi, để họ đưa tàu chở xăng từ Singapore về Việt Nam.
        
        Trả lời HĐXX về việc trước đó đã có kế hoạch bắt 3 tàu Nhật Minh (của Phan Thanh Hữu), bị cáo Thụy cho biết đã nhận được nguồn tin tố giác tội phạm về việc các tàu này buôn lậu xăng, nhưng để giữ bí mật nên không nói cho ai biết, kể cả cấp phó.
        
        "Bị cáo đã trực tiếp đi trinh sát thì thấy tàu Nhật Minh 06 nhưng không có hàng. Lúc đó, bị cáo có niềm tin về nguồn tin báo của quần chúng là đúng nên đã chuẩn bị phương án, vũ khí... huy động lực lượng. Tuy nhiên, bị cáo nghĩ khi tàu từ biển đi vào cửa sông sẽ mất khoảng 10 tiếng nên nếu cần thiết sẽ báo Cục và huy động thêm lực lượng sau", Thụy nói.
        
        Cựu cán bộ hải quan khai thêm, theo kinh nghiệm của mình, nhóm buôn lậu hoạt động đến giai đoạn này mới phát hiện thì chắc chắn phải có các mối quan hệ xã hội với các cơ quan chức năng, biên phòng và cửa khẩu... nên Thụy muốn giữ bí mật để thực hiện kế hoạch trọn vẹn.
        
        "Theo đúng kế hoạch nguồn tin báo thì đêm 25, rạng sáng 26/1/2021 tàu buôn lậu sẽ vào. Bị cáo liên lạc với người đưa tin thì được biết tàu chưa xuất hiện ở cửa sông, nên biết là đã bị lộ. Bị cáo sau đó mới cho anh em rút quân để sau Tết tính tiếp", bị cáo Thụy khai.
        
        Cựu cán bộ hải quan này cho biết, không lâu sau khi quyết định rút quân thì nhận được điện thoại của Quyền (một cán bộ hải quan có quen biết từ trước) nói có Tứ muốn xin gặp. Lúc này bị cáo biết chắc chắn kế hoạch bắt tàu Nhật Minh đã bị lộ. Trưa hôm sau, Nguyễn Hữu Tứ tới gặp Thụy tại nhà hàng đặt vấn đề nhờ giúp đỡ các tàu của Hữu đưa xăng vào bờ.
        
        Bị cáo Ngô Văn Thụy trả lời thẩm vấn, ngày 11/11. Ảnh: Phước Tuấn`
    }
]

blogApi.get('/', async (req, res) => {
    res.render('posts', {
            POSTS
        }        
    )
})

blogApi.get('/post/:slug', async (req, res) => {
    const slug = req.params.slug
    const post = POSTS.filter(post => post.slug === slug)[0]
    res.render("post", post)
})

module.exports = blogApi