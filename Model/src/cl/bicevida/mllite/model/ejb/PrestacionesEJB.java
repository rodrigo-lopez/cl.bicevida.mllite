package cl.bicevida.mllite.model.ejb;

import cl.bicevida.mllite.model.ejb.dto.GetPolizaIn;
import cl.bicevida.mllite.model.ejb.dto.GetPolizaOut;

import javax.ejb.Remote;

@Remote
public interface PrestacionesEJB {
    GetPolizaOut getPoliza(GetPolizaIn gpIn);
}






