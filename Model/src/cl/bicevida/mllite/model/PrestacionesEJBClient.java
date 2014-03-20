package cl.bicevida.mllite.model;

import cl.bicevida.mllite.model.ejb.PrestacionesEJB;

import cl.bicevida.mllite.model.ejb.dto.GetPolizaIn;

import cl.bicevida.mllite.model.ejb.dto.GetPolizaOut;

import java.util.Hashtable;

import javax.naming.CommunicationException;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;



public class PrestacionesEJBClient {
    public static void main(String[] args) {
        try {
            final Context context = getInitialContext();
            PrestacionesEJB prestacionesEJB =
                (PrestacionesEJB)context.lookup("MLLite-PrestacionesEJB#cl.bicevida.mllite.model.ejb.PrestacionesEJB");
            
            GetPolizaIn gpIn = new GetPolizaIn();
            gpIn.setNumeroPoliza(176903);
            GetPolizaOut result = prestacionesEJB.getPoliza(gpIn);
            System.out.println(result.getPoliza().getContratante().getNombre());
            
        } catch (CommunicationException ex) {
            System.out.println(ex.getClass().getName());
            System.out.println(ex.getRootCause().getLocalizedMessage());
            System.out.println("\n*** A CommunicationException was raised.  This typically\n*** occurs when the target WebLogic server is not running.\n");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    private static Context getInitialContext() throws NamingException {
        Hashtable env = new Hashtable();
        // WebLogic Server 10.x connection details
        env.put( Context.INITIAL_CONTEXT_FACTORY, "weblogic.jndi.WLInitialContextFactory" );
        env.put(Context.PROVIDER_URL, "t3://localhost:7101");
        return new InitialContext( env );
    }
}
