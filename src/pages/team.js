import React from "react";
import "../components/profile.css";

const Team = () => {
    const btv = [
        { name: "Tr. Vien", position: "Chapter President - Đoàn Trưởng", img: "/images/vienhua.jpg" },
        { name: "Tr. Bao Huong", position: "Chapter Vice President Of Administrative Affairs - Phó Quản Trị", img: "/images/bhdoan.jpg" },
        { name: "Tr. Julie", position: "Chapter Vice President Of Academic Affairs - Phó Nghiên Huấn", img: "/images/juliedinh.jpg" },
        { name: "Tr. Uyen", position: "Chapter Secretary - Thư Ký", img: "/images/uyendao.jpg" },
        { name: "Tr. Trung", position: "Chapter Treasurer - Thủ Quỹ", img: "/images/trungdo.jpg" },
    ];

    const nganhTruong = [
        { name: "Tr. ", position: "Ngành Trưởng - Ấu Nhi", img: "/images/" },
        { name: "Tr. ", position: "Ngành Trưởng - Thiếu Nhi", img: "/images/" },
        { name: "Tr. ", position: "Ngành Trưởng - Nghĩa Sĩ", img: "/images/portrait.jpeg" },
        { name: "Tr. ", position: "Ngành Trưởng - Hiệp Sĩ", img: "/images/" },
    ]

    return (
        <div className="page-container">
            <div className="subtitle">
                Meet the Team
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
                            <h2 className="card-position">{btv.position}</h2>
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
                            <h2 className="card-position">{nganhTruong.position}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;