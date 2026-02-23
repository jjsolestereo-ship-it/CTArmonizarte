
import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  ShieldCheck, 
  ExternalLink,
  Loader2,
  Lock,
  Sparkles,
  Crown
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, planName, planPrice }) => {
  const [method, setMethod] = useState<'bank' | 'paypal' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    
    // Simulamos una verificación de transferencia bancaria o respuesta de PayPal
    setTimeout(() => {
      // GRABAR SUSCRIPCIÓN EN LOCALSTORAGE
      localStorage.setItem('armonizarte_subscription', planName);
      
      // DISPARAR EVENTO DE SINCRONIZACIÓN GLOBAL
      window.dispatchEvent(new Event('subscriptionUpdated'));
      
      // Opcionalmente, notificamos al sistema que el almacenamiento cambió para otras pestañas
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'armonizarte_subscription',
        newValue: planName
      }));

      setIsProcessing(false);
      setIsSuccess(true);
    }, 2800);
  };

  const isAnnual = planName.includes('Anual');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-900/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300 border border-white/20">
        
        {/* Header */}
        <div className="p-8 border-b border-stone-100 flex justify-between items-center bg-stone-50/80">
          <div>
            <h3 className="text-2xl font-bold font-serif text-brand-900">Finalizar Suscripción</h3>
            <div className="flex items-center gap-2 mt-1">
              {isAnnual && <Sparkles size={14} className="text-amber-500" />}
              <p className="text-sm text-stone-500 font-medium">Acceso para: <span className="font-bold text-brand-700">{planName}</span></p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full transition-colors">
            <X size={24} className="text-stone-400" />
          </button>
        </div>

        <div className="p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-green-100">
                <CheckCircle2 size={48} />
              </div>
              <h4 className="text-4xl font-bold font-serif text-brand-900 mb-4 tracking-tight">¡Activación Exitosa!</h4>
              <p className="text-stone-500 mb-10 max-w-sm mx-auto text-lg leading-relaxed">
                Tu estatus como <strong>{planName}</strong> ha sido verificado. Disfruta de todos tus beneficios premium.
              </p>
              <button 
                onClick={onClose}
                className="w-full py-5 bg-brand-800 text-white rounded-2xl font-bold hover:bg-brand-900 transition-all shadow-xl shadow-brand-900/20 text-lg active:scale-95"
              >
                Acceder al Panel de Socio
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Resumen de Pago */}
              <div className={`flex justify-between items-center p-10 rounded-[2.5rem] border ${isAnnual ? 'bg-brand-900 text-white border-brand-800' : 'bg-brand-50 text-brand-900 border-brand-100'} shadow-inner`}>
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-[0.3em] ${isAnnual ? 'text-brand-300' : 'text-brand-500'}`}>Monto a Procesar</p>
                  <p className="text-5xl font-bold font-serif mt-1 tracking-tighter">{planPrice}</p>
                </div>
                {isAnnual && (
                  <div className="bg-amber-500/20 px-5 py-3 rounded-2xl backdrop-blur-md border border-amber-500/30 flex items-center gap-2">
                    <Crown size={20} className="text-amber-400" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-200">Plan Top Tier</span>
                  </div>
                )}
              </div>

              {!method ? (
                <div className="space-y-4">
                  <p className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.4em] text-center mb-6">Elige el medio de pago</p>
                  
                  <button 
                    onClick={() => setMethod('bank')}
                    className="w-full group flex items-center justify-between p-7 bg-white border-2 border-stone-100 rounded-[2.5rem] hover:border-brand-500 hover:bg-brand-50/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-stone-100 rounded-3xl flex items-center justify-center text-stone-500 group-hover:bg-brand-700 group-hover:text-white transition-all shadow-inner">
                        <Building2 size={32} />
                      </div>
                      <div className="text-left">
                        <h5 className="font-bold text-brand-900 text-lg">Transferencia Directa</h5>
                        <p className="text-xs text-stone-500">Banco Pichincha (Validación en minutos)</p>
                      </div>
                    </div>
                    <ArrowRight size={24} className="text-stone-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                  </button>

                  <button 
                    onClick={() => setMethod('paypal')}
                    className="w-full group flex items-center justify-between p-7 bg-white border-2 border-stone-100 rounded-[2.5rem] hover:border-blue-400 hover:bg-blue-50/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-stone-100 rounded-3xl flex items-center justify-center text-stone-500 group-hover:bg-[#0070ba] group-hover:text-white transition-all shadow-inner">
                        <CreditCard size={32} />
                      </div>
                      <div className="text-left">
                        <h5 className="font-bold text-brand-900 text-lg">PayPal / Tarjeta</h5>
                        <p className="text-xs text-stone-500">Débito o Crédito Global</p>
                      </div>
                    </div>
                    <ArrowRight size={24} className="text-stone-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              ) : method === 'bank' ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-6 duration-400">
                  <button onClick={() => setMethod(null)} className="text-xs font-bold text-brand-600 hover:text-brand-900 flex items-center gap-2 transition-colors group">
                    <X size={14} className="bg-brand-50 p-0.5 rounded-full" /> Cambiar método de pago
                  </button>
                  <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-200 space-y-5 shadow-inner">
                    <h5 className="text-center font-bold text-brand-900 mb-6 uppercase tracking-[0.2em] text-[12px]">Datos de Cuenta Oficial</h5>
                    <div className="grid grid-cols-2 gap-y-6 text-sm">
                      <span className="text-stone-500">Banco:</span>
                      <span className="font-bold text-right text-brand-900">Banco Pichincha</span>
                      
                      <span className="text-stone-500">Cuenta:</span>
                      <span className="font-bold text-right text-brand-900">Ahorros</span>
                      
                      <span className="text-stone-500">Número:</span>
                      <div className="flex items-center justify-end gap-2">
                        <span className="font-bold text-brand-900 text-lg">2210188360</span>
                        <button onClick={() => handleCopy('2210188360')} className="text-brand-500 hover:bg-white p-2 rounded-xl transition-all shadow-sm">
                          {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                        </button>
                      </div>

                      <span className="text-stone-500">Identificación:</span>
                      <span className="font-bold text-right text-brand-900">01/29</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-stone-400 text-center leading-relaxed font-medium italic">
                    * Al pulsar el botón, confirmas que has realizado el depósito. Activaremos tu cuenta tras verificar el comprobante en nuestro sistema.
                  </p>

                  <button 
                    onClick={handleConfirmPayment}
                    disabled={isProcessing}
                    className="w-full py-5 bg-brand-800 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-900 transition-all shadow-2xl shadow-brand-900/30 disabled:opacity-50 text-lg active:scale-95"
                  >
                    {isProcessing ? <Loader2 className="animate-spin" /> : <ShieldCheck />}
                    {isProcessing ? 'Verificando Transferencia...' : 'Confirmar Transferencia Realizada'}
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-6 duration-400">
                   <button onClick={() => setMethod(null)} className="text-xs font-bold text-brand-600 hover:text-brand-900 flex items-center gap-2 transition-colors">
                    <X size={14} className="bg-brand-50 p-0.5 rounded-full" /> Cambiar método de pago
                  </button>
                  <div className="text-center py-10">
                    <div className="flex justify-center mb-8">
                      <div className="bg-blue-50 p-8 rounded-[2.5rem] text-[#0070ba] shadow-inner border border-blue-100">
                        <Lock size={48} />
                      </div>
                    </div>
                    <h5 className="text-3xl font-bold text-brand-900 mb-4 font-serif">Checkout Seguro</h5>
                    <p className="text-stone-500 text-base mb-10 max-w-xs mx-auto">Serás redirigido al portal oficial de PayPal para procesar tu suscripción de forma instantánea.</p>
                    
                    <button 
                      onClick={handleConfirmPayment}
                      disabled={isProcessing}
                      className="w-full py-5 bg-[#0070ba] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#005ea6] transition-all shadow-xl shadow-blue-900/20 text-lg active:scale-95"
                    >
                      {isProcessing ? <Loader2 className="animate-spin" /> : <ExternalLink size={20} />}
                      {isProcessing ? 'Conectando con PayPal...' : 'Continuar a PayPal Seguros'}
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-8 pt-8 border-t border-stone-100">
                <div className="flex items-center gap-2 text-[10px] font-extrabold text-stone-400 uppercase tracking-widest">
                  <ShieldCheck size={16} className="text-green-500" /> Seguridad PCI-DSS
                </div>
                <div className="flex items-center gap-2 text-[10px] font-extrabold text-stone-400 uppercase tracking-widest">
                   <Lock size={16} className="text-brand-400" /> SSL 256 BITS
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
