import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import "./Roadmap.scss";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";
const Roadmap = () => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 730,
    })
  );
  return (
    <Grid className="RoadmapWrap" container justify="center">
      <Grid item sm={8} xs={9}>
        <Grid container direction="column" className={"Roadmap"} id="c_rules">
          {/* <Grid item xs={8} className={'RoadmapContainer'}> */}

          <div className="RoadmapBlock">
            {/* <img src="./images/promoTop.png" className="RoadmapPromo" /> */}

            <span className="RoadmapNumb">
              1
              <span className="RoadmapNumbLine" />
            </span>
            <h3>Зарегистрируй свой уникальный промокод</h3>
            <p>и присоединяйся к программе подготовки амбассадоров</p>
            <Grid item className="imgWrap">
              {/* <img src="./images/birka.png" /> */}
            </Grid>
          </div>
          <Grid
            container
            direction="row-reverse"
            alignItems="center"
            justify="space-between"
            className="RoadmapBlock"
          >
            <Grid item className="RoadmapTextContainer">
              <span className="RoadmapNumb">
                2
                <span className="RoadmapNumbLine" />
              </span>
              <p>
                Выполняй еженедельные задания,
                <br />
                получай баллы,
              </p>
              <h3>и меняй их на призы*</h3>
              <p>
                *Призы могут отличаться по внешнему виду от изображений на
                рекламных материалах
              </p>
            </Grid>
            <Grid item className="RoadmapImgContainer">
              {/* //<img src={priz} width='100%' height='100%'/> */}
            </Grid>
          </Grid>
          <Grid container className="RoadmapBlock">
            <Grid item sm={6} xs={8} className="RoadmapTextContainer">
              <span className="RoadmapNumb">
                3
                <span className="RoadmapNumbLine" />{" "}
              </span>
              <h3>
                {matches
                  ? `Выиграй поездку в Германию
                            в сады Weleda`
                  : "Выиграй поездку в Германию"}
              </h3>
              <p>или годовой запас косметики Weleda</p>
            </Grid>
            <Grid item sm={6} className={"RoadmapImgContainer"}>
              <img src="./images/plane.png" />
            </Grid>
          </Grid>

          {/* </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Roadmap;
