import React from "react";
import "../components/profile.css";

const Team = () => {
    const cha = {
        name: "Cha Đaminh Nguyễn Anh Tuấn", 
        position_vietnamese: "Cha Tuyên Úy", 
        img: "/images/chatuan.jpg" 
    };

    const btv = [
        { name: "Tr. Vien", position_english: "Chapter President", position_vietnamese: "Đoàn Trưởng", img: "/images/vienhua.jpg" },
        { name: "Tr. Bao Huong", position_english: "Chapter Vice President of Administrative Affairs", position_vietnamese: "Phó Quản Trị", img: "/images/bhdoan.jpg" },
        { name: "Tr. Julie", position_english: "Chapter Vice President of Academic Affairs", position_vietnamese: "Phó Nghiên Huấn", img: "/images/juliedinh.jpg" },
        { name: "Tr. Uyen", position_english: "Chapter Secretary", position_vietnamese: "Thư Ký", img: "/images/uyendao.jpg" },
        { name: "Tr. Trung", position_english: "Chapter Treasurer", position_vietnamese: "Thủ Quỹ", img: "/images/trungdo.jpg" },
    ];

    const nganhTruong = [
        { name: "Tr. Uyen", position_english: "Division Leader Seedling Specialist", position_vietnamese: "Ngành Trưởng Ấu Nhi", img: "/images/uyendao.jpg" },
        { name: "Tr. Bao Ngan", position_english: "Division Leader Search Specialist", position_vietnamese: "Ngành Trưởng Thiếu Nhi", img: "/images/bndoan.jpg" },
        { name: "Tr. Michael", position_english: "Division Leader Companion Specialist", position_vietnamese: "Ngành Trưởng Nghĩa Sĩ", img: "/images/portrait.jpeg" },
        { name: "Tr. An", position_english: "Division Leader Knights of the Eucharist Specialist", position_vietnamese: "Ngành Trưởng Hiệp Sĩ", img: "/images/antran.jpg" },
    ]

    return (
        <div className="page-container">
            <div className="subtitle">
                Meet the Team - Ban Chấp Hành
            </div>
            <div className="profile-container">
                    <div className="profile-card">
                    <div className="card-header">
                        <img
                            className="card-avatar"
                            src={cha.img}
                            alt={`${cha.img}'s avatar`}
                        />
                        <h1 className="card-fullname">{cha.name}</h1>
                        <h2 className="card-position-vietnamese">{cha.position_vietnamese}</h2>
                    </div>
                </div>
            </div>
            <div className="profile-container">
                {btv.map((btv, index) => (
                    <div className="profile-card" key={index}>
                        <div className="card-header">
                            <img
                                className="card-avatar"
                                src={btv.img}
                                alt={`${btv.name}'s avatar`}
                            />
                            <h1 className="card-fullname">{btv.name}</h1>
                            <h2 className="card-position-english">{btv.position_english}</h2>
                            <h3 className="card-position-vietnamese">{btv.position_vietnamese}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="profile-container">
                {nganhTruong.map((nganhTruong, index) => (
                    <div className="profile-card" key={index}>
                        <div className="card-header">
                            <img
                                className="card-avatar"
                                src={nganhTruong.img}
                                alt={`${nganhTruong.name}'s avatar`}
                            />
                            <h1 className="card-fullname">{nganhTruong.name}</h1>
                            <h2 className="card-position-english">{nganhTruong.position_english}</h2>
                            <h3 className="card-position-vietnamese">{nganhTruong.position_vietnamese}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;