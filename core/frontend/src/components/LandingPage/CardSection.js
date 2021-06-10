import React from "react";
import Card from "../UI/Card";
import "./CardSection.css";

const CardSection = () => {
  return (
    <div className="card-section-container">
      <Card
        title="Quienes Somos?"
        img="https://lh3.googleusercontent.com/pw/ACtC-3cuvrv_soYeMiLmV0SdJ4XZ3z_7ZjOYeU7FX8ejcEA7t4rHaE9eeTb7KJ6U3lrVzeB_Eig8SboZa4gXGOMyQHVXiE34xat_RSUmz7-LzePQVmZmk6cLDyP0MnNQrQQAqiz897L9J6ZmSmbWkVibEBLP=w1455-h970-no?authuser=0"
        alt="Quienes Somos imagen"
      />
      <Card
        title="Que Hacemos?"
        img="https://lh3.googleusercontent.com/pw/ACtC-3fJ7e87TGDHp8BJWD7EOfvFIn2A_iS6QD04pX400efJ8alDBiE-1Tl1aKXbPV6LyQBLIpBMce1gjvW_dA7u3pHHorDrtFjAUGxEDIJzWqtk4akjlg1dkX5IzEQesKzAZwe0K88eKpeyofrhn6K8ok-a=w1455-h970-no?authuser=0"
        alt="Que Hacemos imagen"
      />
      <Card
        title="Como lo hacemos?"
        img="https://lh3.googleusercontent.com/pw/ACtC-3e6DCG0jXG5IIxnPzXOCVL3w30krbafshJz5B82xUJNMCA8lT3JXEAff-WAdYHcP71RY3eDZXDuJjYk-p_0F_rzT73_WAl_N9n8xJemQcRyHllsaaPAoJFrSKDTHdEFn29wThIARqMeApoUAC3Qcmui=w1455-h970-no?authuser=0"
        alt="Como lo hacemos imagen"
      />
    </div>
  );
};

export default CardSection;
