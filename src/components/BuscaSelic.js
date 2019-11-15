import React, { useState, Component } from "react";

import "./BuscaSelic.css";

export default class BuscaSelic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data_inicial: "",
      data_final: "",
      valorSelic: 0,
      dados: []
    };

    this.buscarselic = this.buscarselic.bind(this);
  }
  handleInputChange = event => {
    this.setState({ data_inicial: event.target.value });
  };
  buscarselic() {
    let url =
      "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json";

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        let dados = json;
        let valor = json[1].valor;
        console.log(json);

        this.setState({ dados });

        console.log(this.state.dados);
      });
  }

  render() {
    return (
      <div className="buscador">
        <h3>
          Data inicial
          <input
            id="data_inicial"
            type="date"
            onChange={event => {
              this.setState({ data_inicial: event.target.value });
              console.log("Data inicial: " + this.state.data_inicial);
            }}
          ></input>
        </h3>
        <br />
        <h3>
          Data final
          <input id="data_final" type="date" />
        </h3>
        <input type="button" value="Buscar" onClick={this.buscarselic} />
        {/* <input type="button" value="Buscar" onClick={this.buscarselic}/> */}
        <div className="row dias">
          {this.state.dados.map(s => (
            <div key={s.data} className="col-md-4 dia">
              <h3 className="">Dia: {s.data}</h3>
              <h3 className="">valor: {s.valor}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
